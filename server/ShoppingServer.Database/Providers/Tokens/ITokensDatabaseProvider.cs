using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Providers.Users
{
    public interface ITokensDatabaseProvider
    {
        public TokenEntry? GetByUserId(string id);

        public TokenEntry? GetByToken(string token);

        public bool Add(TokenEntry entry);

        public bool DeleteByUserId(string id);

        public bool RevokeByUserId(string id);
    }
}
