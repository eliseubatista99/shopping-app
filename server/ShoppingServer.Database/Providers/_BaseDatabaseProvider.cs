using Microsoft.Extensions.Configuration;
using ShoppingApp.Database.Helpers;
using DatabasePackage = Database.PostgreSql;

namespace ShoppingApp.Database.Providers
{

    public class BaseDatabaseProvider<T> : DatabasePackage.Providers.NpgsqlDatabaseProvider<T>
    {
        public BaseDatabaseProvider(IConfiguration configuration) : base(configuration)
        {
        }

        protected override string GetConnectionString()
        {
            var con = ConnectionHelper.GetConnectionString(_configuration)!;

            return con;
        }
    }
}
