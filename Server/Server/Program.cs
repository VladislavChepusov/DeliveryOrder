using Microsoft.EntityFrameworkCore;
using DAL;
using Server.Mapper;
using Server.Services;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // Подключение к БД
        builder.Services.AddDbContext<DAL.DataContext>(options =>
        {
            // Описываем какой провайдер используем,а также указываем строчку подключения
            options.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSql"), sql => { });
        }, contextLifetime: ServiceLifetime.Scoped);
        // contextLifetime: ServiceLifetime.Scoped); изменил время жизни контекста на скоп


        builder.Services.AddAutoMapper(typeof(MapperProfile).Assembly);// Добавление автомаппера

        builder.Services.AddScoped<OrderService>(); // Добавление сервис заказов


        //builder.Services.AddCors();
      

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAllHeaders",
                builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });

        var app = builder.Build();

      
        // Указываем,что при каждом запуске приложения должны выполняться миграции,чтобы обнолвения происходили сами
        // Создаем отдельный Scope в рамках которого вызываем миграции
        using (var serviceScope = ((IApplicationBuilder)app).ApplicationServices.GetService<IServiceScopeFactory>()?.CreateScope())
        {
            if (serviceScope != null)
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<DAL.DataContext>();
                context.Database.Migrate();
            }
        }

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        //app.UseCors("AllowLocalhost7027");

        // подключаем CORS
        // app.UseCors(builder => builder.AllowAnyOrigin());
        app.UseCors("AllowAllHeaders");

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}