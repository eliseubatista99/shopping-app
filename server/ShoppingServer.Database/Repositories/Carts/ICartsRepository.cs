using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ICartsRepository : IRepository<CartModel>
    {
        public Task<List<CartModel>> GetUserCart(string userId);

        public Task<int> GetCartCount(string userId);

        public Task<bool> DeleteByIds(IEnumerable<string> ids, string userId, bool saveChanges = true);

        public Task<bool> UpdateCartItems(IEnumerable<CartModel> items, string userId, bool saveChanges = true);

        public Task<bool> AddItemsAsync(IEnumerable<CartModel> items, string userId, bool saveChanges = true);
    }
}
