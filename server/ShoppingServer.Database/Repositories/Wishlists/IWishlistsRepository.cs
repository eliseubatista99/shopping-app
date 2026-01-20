using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IWishlistsRepository : IRepository<WishlistModel>
    {
        public Task<bool> DeleteUserProduct(string userId, string productId, bool saveChanges = true);

        public Task<(List<WishlistModel> Data, bool HasMorePages)> GetByUserId(string userId,
            int? page = 1,
            int? pageSize = 10);

        public Task<List<WishlistModel>> GetByProductIds(IEnumerable<string> productIds);

        public Task<WishlistModel?> GetByProductId(string productId);

    }
}
