using Database.PostgreSql.Extensions;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class WishlistsRepository : BaseAppRepository<WishlistModel>, IWishlistsRepository
    {
        public WishlistsRepository(AppDbContext context) : base(context)
        {
        }

        public Task<bool> DeleteUserProduct(string userId, string productId, bool saveChanges = true)
        {
            return DeleteAsync(w => w.UserId == userId && w.ProductId == productId, saveChanges);
        }

        public override Task<WishlistModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<WishlistModel?> GetByProductId(string productId)
        {
            return this.ReadQuery().Where(w => w.ProductId == productId).FirstOrDefaultAsync();
        }

        public Task<List<WishlistModel>> GetByProductIds(IEnumerable<string> productIds)
        {
            return this.ReadQuery().Where(w => productIds.Contains(w.ProductId)).ToListAsync();
        }

        public Task<(List<WishlistModel> Data, bool HasMorePages)> GetByUserId(string userId, int? page = 1, int? pageSize = 10)
        {
            var query = this.ReadQuery().Where(p => p.UserId == userId).OrderByDescending(o => o.CreatedAt);

            return query.ExecutePaginatedRead(page, pageSize);
        }
    }
}

