using Microsoft.EntityFrameworkCore;
using DAL;
using Server.Mapper;
using Server.Services;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // ����������� � ��
        builder.Services.AddDbContext<DAL.DataContext>(options =>
        {
            // ��������� ����� ��������� ����������,� ����� ��������� ������� �����������
            options.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSql"), sql => { });
        }, contextLifetime: ServiceLifetime.Scoped);
        // contextLifetime: ServiceLifetime.Scoped); ������� ����� ����� ��������� �� ����


        builder.Services.AddAutoMapper(typeof(MapperProfile).Assembly);// ���������� �����������

        builder.Services.AddScoped<OrderService>(); // ���������� ������ �������

        var app = builder.Build();


        // ���������,��� ��� ������ ������� ���������� ������ ����������� ��������,����� ���������� ����������� ����
        // ������� ��������� Scope � ������ �������� �������� ��������
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

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}