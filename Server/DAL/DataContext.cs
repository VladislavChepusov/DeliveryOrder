using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        // Переопределел метод конфигурации
        // Указывает где у нас будут прописываться миграции (Server>Migrations)
        // скачать пакет npgsql.entityframeworkcore.postgresql для миграций
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(b => b.MigrationsAssembly("Server"));

        // Оповещаем об появлении новых таблиц
        public DbSet<Order> Orders => Set<Order>();
    }
}