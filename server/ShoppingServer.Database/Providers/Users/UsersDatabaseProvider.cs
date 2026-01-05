using Database.PostgreSql.Helpers;
using Microsoft.Extensions.Configuration;
using Npgsql;
using ShoppingApp.Database.Models;
using ShoppingServer.Database.Providers.Users;

namespace ShoppingApp.Database.Providers
{
    public class UsersDatabaseProvider : BaseDatabaseProvider<UserEntry>, IUsersDatabaseProvider
    {
        public UsersDatabaseProvider(IConfiguration configuration) : base(configuration)
        {
        }

        public bool AddUser(UserEntry entry)
        {
            var command = $"INSERT INTO {TableUsers.TABLE_NAME} " +
            $"({TableUsers.COLUMN_ID}, {TableUsers.COLUMN_PASSWORD_HASH}, {TableUsers.COLUMN_NAME}, {TableUsers.COLUMN_SURNAME}, {TableUsers.COLUMN_EMAIL}, " +
            $"{TableUsers.COLUMN_PHONE_NUMBER}, {TableUsers.COLUMN_PHONE_NUMBER_PREFIX}, {TableUsers.COLUMN_IMAGE}) " +
            $"VALUES " +
            $"('{entry.Id}', '{entry.PasswordHash}', '{entry.Name}', '{entry.Surname}', '{entry.Email}', '{entry.PhoneNumber}', '{entry.PhoneNumberPrefix}', '{entry.Image}');";

            return ExecuteWrite(command);
        }

        public UserEntry? GetUserByEmail(string email)
        {
            var command = $"SELECT * FROM {TableUsers.TABLE_NAME} WHERE {TableUsers.COLUMN_EMAIL} = '{email}'";

            return ExecuteRead(command);
        }

        public UserEntry? GetUserByPhoneNumber(string phoneNumber)
        {
            var command = $"SELECT * FROM {TableUsers.TABLE_NAME} WHERE {TableUsers.COLUMN_PHONE_NUMBER} = '{phoneNumber}'";

            return ExecuteRead(command);
        }

        protected override UserEntry? GetObjectFromDataReader(NpgsqlDataReader dataReader)
        {
            return new UserEntry
            {
                Id = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_ID)!,
                PasswordHash = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_PASSWORD_HASH),
                Name = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_NAME)!,
                Surname = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_SURNAME)!,
                Email = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_EMAIL),
                PhoneNumber = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_PHONE_NUMBER),
                PhoneNumberPrefix = NpgsqlDatabaseHelper.ReadColumnValue(dataReader, TableUsers.COLUMN_PHONE_NUMBER_PREFIX),
                Image = NpgsqlDatabaseHelper.ReadColumnValue<byte[]>(dataReader, TableUsers.COLUMN_IMAGE),
            };
        }

    }
}
