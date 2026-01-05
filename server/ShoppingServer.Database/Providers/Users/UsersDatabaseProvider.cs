using Database.PostgreSql.Extensions;
using Database.PostgreSql.Models;
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
            return ExecuteInsertCommand(TableUsers.TABLE_NAME,
            [
                new TableField{ FieldName = TableUsers.COLUMN_ID, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Id },
                new TableField{ FieldName = TableUsers.COLUMN_PASSWORD_HASH, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.PasswordHash },
                new TableField{ FieldName = TableUsers.COLUMN_NAME, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Name },
                new TableField{ FieldName = TableUsers.COLUMN_SURNAME, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Surname },
                new TableField{ FieldName = TableUsers.COLUMN_EMAIL, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Email },
                new TableField{ FieldName = TableUsers.COLUMN_PHONE_NUMBER, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.PhoneNumber },
                new TableField{ FieldName = TableUsers.COLUMN_PHONE_NUMBER_PREFIX, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.PhoneNumberPrefix},
                new TableField{ FieldName = TableUsers.COLUMN_IMAGE, DataType = NpgsqlTypes.NpgsqlDbType.Bytea, FieldValue = entry.Image },
            ]);
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
                Id = dataReader.ReadColumnValue(TableUsers.COLUMN_ID)!,
                PasswordHash = dataReader.ReadColumnValue(TableUsers.COLUMN_PASSWORD_HASH),
                Name = dataReader.ReadColumnValue(TableUsers.COLUMN_NAME)!,
                Surname = dataReader.ReadColumnValue(TableUsers.COLUMN_SURNAME)!,
                Email = dataReader.ReadColumnValue(TableUsers.COLUMN_EMAIL),
                PhoneNumber = dataReader.ReadColumnValue(TableUsers.COLUMN_PHONE_NUMBER),
                PhoneNumberPrefix = dataReader.ReadColumnValue(TableUsers.COLUMN_PHONE_NUMBER_PREFIX),
                Image = dataReader.ReadColumnValue<byte[]>(TableUsers.COLUMN_IMAGE),
            };
        }

    }
}
