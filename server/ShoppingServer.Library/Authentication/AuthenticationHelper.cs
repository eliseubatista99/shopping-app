using Microsoft.AspNetCore.Identity;

namespace ShoppingServer.Library.Authentication
{
    public class AuthenticationHelper
    {
        public static string EncryptPassword<TUser>(TUser user, string? password) where TUser : class
        {
            var _passwordHasher = new PasswordHasher<TUser>();

            return _passwordHasher.HashPassword(user, password ?? string.Empty);
        }

        public static PasswordVerificationResult DecryptPassword<TUser>(TUser user, string? passwordHash, string? password) where TUser : class
        {
            var _passwordHasher = new PasswordHasher<TUser>();

            return _passwordHasher.VerifyHashedPassword(user, passwordHash ?? string.Empty, password ?? string.Empty);
        }
    }
}
