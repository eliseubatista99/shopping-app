using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IOrdersStatusRepository : IRepository<OrdersStatusModel>
    {
        public Task<List<OrdersStatusModel>> GetByOrderId(string orderId);
    }
}
