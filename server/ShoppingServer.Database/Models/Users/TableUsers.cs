using System.Diagnostics.CodeAnalysis;

namespace ShoppingApp.Database.Models
{
    [ExcludeFromCodeCoverage]
    public static class TableUsers
    {
        public static string TABLE_NAME = "users";

        public static string COLUMN_ID = "id";

        public static string COLUMN_PASSWORD_HASH = "passwordHash";

        public static string COLUMN_NAME = "name";

        public static string COLUMN_SURNAME = "surname";

        public static string COLUMN_EMAIL = "email";

        public static string COLUMN_PHONE_NUMBER = "phoneNumber";

        public static string COLUMN_PHONE_NUMBER_PREFIX = "phoneNumberPrefix";

        public static string COLUMN_IMAGE = "image";
    }
}
