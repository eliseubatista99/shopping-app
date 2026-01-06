using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class TokensRepository : BaseAppRepository<TokenEntry>, ITokensRepository
    {
        public TokensRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<bool> AddAsync(TokenEntry entity)
        {
            return base.AddAsync(entity);
        }

        public override Task<TokenEntry?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<TokenEntry?> GetByToken(string token)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(i => i.Token == token);
        }

        public async Task<TokenEntry?> GetByUserId(string userId)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(i => i.UserId == userId);
        }

        public async Task<int> DeleteByUserIdAsync(string userId)
        {
            return await DeleteAsync(i => i.UserId == userId);
            //return await _dbSet.Where(i => i.UserId == userId).ExecuteDeleteAsync();
        }

        public async Task<int> RevokeByUserId(string userId)
        {
            return await UpdateAsync(
                filter: i => i.UserId == userId,
                set: setters => setters
                        .SetProperty(e => e.RevokedAt, _ => DateTimeOffset.UtcNow)
            );
        }
    }
}
