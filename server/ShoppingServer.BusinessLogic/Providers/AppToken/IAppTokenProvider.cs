using ShoppingApp.Database.Models;

namespace ShoppingServer.BusinessLogic.Providers.AppToken
{
    public interface IAppTokenProvider
    {
        public string GenerateToken(UserModel user);

        public TokenModel GenerateRefreshToken(UserModel user);
    }
}
