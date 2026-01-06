using ShoppingApp.Database.Models;

namespace ShoppingServer.BusinessLogic.Providers.AppToken
{
    public interface IAppTokenProvider
    {
        public string GenerateToken(UserEntry user);

        public TokenEntry GenerateRefreshToken(UserEntry user);
    }
}
