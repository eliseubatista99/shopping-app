using Microsoft.Extensions.Configuration;
using ShoppingApp.Database.Helpers;
using DatabasePackage = Database.PostgreSql;

namespace ShoppingApp.Database.Providers
{

    public class BaseDatabaseProvider<T> : DatabasePackage.Providers.NpgsqlDatabaseProvider<T>
    {
        protected IConfiguration _configuration { get; }

        public BaseDatabaseProvider(IConfiguration configuration) : base()
        {
            _configuration = configuration;
        }


        protected override string GetConnectionString()
        {
            var con = ConnectionHelper.GetConnectionString(_configuration)!;

            return con;
        }
    }
}
