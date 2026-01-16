using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IOrderProductsRepository : IRepository<OrderProductModel>
    {
        public Task<List<OrderProductModel>> GetByOrderIds(IEnumerable<string> orderId);
    }
}
