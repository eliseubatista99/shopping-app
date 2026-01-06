using Database.PostgreSql.Extensions;
using Database.PostgreSql.Models;
using Microsoft.Extensions.Configuration;
using Npgsql;
using ShoppingApp.Database.Models;
using ShoppingServer.Database.Providers.Users;

namespace ShoppingApp.Database.Providers
{
    public class TokensDatabaseProvider : BaseDatabaseProvider<TokenEntry>, ITokensDatabaseProvider
    {
        public TokensDatabaseProvider(IConfiguration configuration) : base(configuration)
        {
        }

        public bool Add(TokenEntry entry)
        {
            return ExecuteInsertCommand(TableUsers.TABLE_NAME,
            [
                new TableField{ FieldName = TableTokens.COLUMN_ID, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Id },
                new TableField{ FieldName = TableTokens.COLUMN_USER_ID, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.UserId },
                new TableField{ FieldName = TableTokens.COLUMN_TOKEN, DataType = NpgsqlTypes.NpgsqlDbType.Varchar, FieldValue = entry.Token },
                new TableField{ FieldName = TableTokens.COLUMN_CREATED_AT, DataType = NpgsqlTypes.NpgsqlDbType.Timestamp, FieldValue = entry.CreatedAt },
                new TableField{ FieldName = TableTokens.COLUMN_EXPIRES_AT, DataType = NpgsqlTypes.NpgsqlDbType.Timestamp, FieldValue = entry.ExpiresAt },
                new TableField{ FieldName = TableTokens.COLUMN_REVOKED_AT, DataType = NpgsqlTypes.NpgsqlDbType.Timestamp, FieldValue = entry.RevokedAt },
            ]);
        }

        public bool DeleteByUserId(string id)
        {
            var command = $"DELETE  FROM {TableTokens.TABLE_NAME} WHERE {TableTokens.COLUMN_USER_ID} = '{id}'";

            return ExecuteWrite(command);
        }

        public TokenEntry? GetByToken(string token)
        {
            var command = $"SELECT * FROM {TableTokens.TABLE_NAME} WHERE {TableTokens.COLUMN_TOKEN} = '{token}'";

            return ExecuteRead(command);
        }

        public TokenEntry? GetByUserId(string id)
        {
            var command = $"SELECT * FROM {TableTokens.TABLE_NAME} WHERE {TableTokens.COLUMN_USER_ID} = '{id}'";

            return ExecuteRead(command);
        }

        public bool RevokeByUserId(string id)
        {
            var command = $"UPDATE {TableTokens.TABLE_NAME} SET {TableTokens.COLUMN_REVOKED_AT} =  WHERE {TableTokens.COLUMN_USER_ID} = '{id}'";

            return ExecuteRead(command);
        }

        protected override TokenEntry? GetObjectFromDataReader(NpgsqlDataReader dataReader)
        {
            return new TokenEntry
            {
                Id = dataReader.ReadColumnValue(TableTokens.COLUMN_ID)!,
                Token = dataReader.ReadColumnValue(TableTokens.COLUMN_TOKEN)!,
                UserId = dataReader.ReadColumnValue(TableTokens.COLUMN_USER_ID)!,
                CreatedAt = dataReader.ReadColumnValue<DateTimeOffset>(TableTokens.COLUMN_CREATED_AT)!,
                ExpiresAt = dataReader.ReadColumnValue<DateTimeOffset>(TableTokens.COLUMN_EXPIRES_AT)!,
                RevokedAt = dataReader.ReadColumnValue<DateTimeOffset>(TableTokens.COLUMN_REVOKED_AT),
            };
        }

    }
}
