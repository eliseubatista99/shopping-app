using Microsoft.Extensions.Configuration;
using ShoppingApp.Database.Models;
using ShoppingServer.Library.Authentication;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using ShoppingServer.BusinessLogic.Providers.AppToken;

namespace ShoppingServer.BusinessLogic.Providers
{
    public class AppTokenProvider: IAppTokenProvider
    {
        private JwtSettings jwtSettings;

        public AppTokenProvider(IConfiguration configuration)
        {
            jwtSettings = configuration.GetSection("Jwt").Get<JwtSettings>()!;
        }

        public string GenerateToken(UserModel user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Name, user.Name),
                new Claim(JwtRegisteredClaimNames.FamilyName, user.Surname),
                new Claim(JwtRegisteredClaimNames.Jti, user.Id)
            };

            if (!string.IsNullOrEmpty(user.Email))
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.Email, user.Email));
            }

            if (!string.IsNullOrEmpty(user.PhoneNumber))
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.PhoneNumber, user.PhoneNumber));
            }

            return AuthenticationHelper.GenerateAccessToken(claims, jwtSettings);
        }

        public TokenModel GenerateRefreshToken(UserModel user)
        {
            var refreshToken = AuthenticationHelper.GenerateRefreshToken();

            var refreshTokenEntity = new TokenModel
            {
                Id = Guid.NewGuid().ToString(),
                Token = refreshToken,
                UserId = user.Id,
                ExpiresAt = DateTimeOffset.UtcNow.AddDays(14),
                CreatedAt = DateTimeOffset.UtcNow,
                RevokedAt = null
            };

            return refreshTokenEntity;
        }
    }
}
