using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ITokensRepository: IRepository<TokenModel>
    {
        public Task<TokenModel?> GetByToken(string token);

        public Task<TokenModel?> GetByUserId(string userId);

        public Task<bool> DeleteByUserIdAsync(string userId, bool saveChanges = true);

        public Task<bool> RevokeByUserId(string userId, bool saveChanges = true);
    }
}
