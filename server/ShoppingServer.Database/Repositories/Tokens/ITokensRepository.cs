using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ITokensRepository: IRepository<TokenEntry>
    {
        public Task<TokenEntry?> GetByToken(string token);

        public Task<TokenEntry?> GetByUserId(string userId);

        public Task<int> DeleteByUserIdAsync(string userId);

        public Task<int> RevokeByUserId(string userId);
    }
}
