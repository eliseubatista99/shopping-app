using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IOrdersRepository : IRepository<OrderModel>
    {
        public Task<(List<OrderModel> Data, bool HasMorePages)> GetByUserId(string userId,
            string? orderId = null,
            string? status = null,
            DateTimeOffset? startDate = null,
            DateTimeOffset? endDate = null,
            int? page = 1,
            int? pageSize = 10);
    }
}
