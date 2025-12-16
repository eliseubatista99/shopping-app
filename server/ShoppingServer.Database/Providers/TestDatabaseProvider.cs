using Database.PostgreSql.Helpers;
using Microsoft.Extensions.Configuration;
using Npgsql;
using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Models;

namespace ShoppingApp.Database.Providers
{
    public class TestDatabaseProvider: BaseDatabaseProvider<TableTestsEntry>, ITestsDatabaseProvider
    {
        public TestDatabaseProvider(IConfiguration configuration) : base(configuration)
        {
        }

        public IList<TableTestsEntry> GetAllTests()
        {
            var command = $"SELECT * FROM {TableTests.NAME}";

            return ExecuteReadMultiple(command);
        }

        protected override TableTestsEntry? GetObjectFromDataReader(NpgsqlDataReader dataReader)
        {
            var Name = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableTests.COLUMN_NAME)!;
            int Age = NpgsqlDatabaseHelper.ReadColumnValue<int>(dataReader, TableTests.COLUMN_AGE).GetValueOrDefault();
            var Address = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableTests.COLUMN_ADDRESS)!;

            return new TableTestsEntry
            {
                Nome = Name, Idade = Age, Localidade = Address
            };
        }

    }
}
