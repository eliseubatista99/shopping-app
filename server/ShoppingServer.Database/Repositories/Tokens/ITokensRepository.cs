using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ITokensRepository: IRepository<TokenModel>
    {
        public Task<TokenModel?> GetByToken(string token);

        public Task<TokenModel?> GetByUserId(string userId);

        public Task<int> DeleteByUserIdAsync(string userId);

        public Task<int> RevokeByUserId(string userId);
    }
}
