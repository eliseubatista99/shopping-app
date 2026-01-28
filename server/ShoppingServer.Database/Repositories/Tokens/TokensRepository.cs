using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class TokensRepository : BaseAppRepository<TokenModel>, ITokensRepository
    {
        public TokensRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<TokenModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<TokenModel?> GetByToken(string token)
        {
            return await this.ReadQuery().FirstOrDefaultAsync(i => i.Token == token);
        }

        public async Task<TokenModel?> GetByUserId(string userId)
        {
            return await this.ReadQuery().FirstOrDefaultAsync(i => i.UserId == userId);
        }

        public async Task<bool> DeleteByUserIdAsync(string userId, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.UserId == userId, saveChanges);
        }

        public async Task<bool> RevokeByUserId(string userId, bool saveChanges = true)
        {
            var success = false;

            success = await UpdateAsync(
                filter: i => i.UserId == userId,
                updateAction: entity =>
                {
                    entity.RevokedAt = DateTimeOffset.UtcNow;
                },
                saveChanges: false
            );

            if (saveChanges && success)
            {
                return await SaveChangesAsync();
            }

            return success;
        }
    }
}
