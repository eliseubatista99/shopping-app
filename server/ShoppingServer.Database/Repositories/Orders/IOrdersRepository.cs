using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IOrdersRepository : IRepository<OrderModel>
    {
        public Task<(List<OrderModel> Data, bool HasMorePages)> GetByUserId(string userId, string? orderId, string? status, DateTimeOffset? startDate, DateTimeOffset? endDate, int? page = 1, int? pageSize = 10);
    }
}
