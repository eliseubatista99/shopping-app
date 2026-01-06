using System.Diagnostics.CodeAnalysis;

namespace ShoppingApp.Database.Models
{
    [ExcludeFromCodeCoverage]
    public static class TableTokens
    {
        public static string TABLE_NAME = "tokens";

        public static string COLUMN_ID = "id";

        public static string COLUMN_USER_ID = "userId";

        public static string COLUMN_TOKEN = "token";

        public static string COLUMN_CREATED_AT = "createdAt";

        public static string COLUMN_EXPIRES_AT = "expiresAt";

        public static string COLUMN_REVOKED_AT = "revokedAt";
    }
}
