using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class OrdersRepository : BaseAppRepository<OrderModel>, IOrdersRepository
    {
        public OrdersRepository(AppDbContext context) : base(context)
        {
        }

        //public override Task<OrderModel?> GetByIdAsync(string id)
        //{
        //    return base.GetByIdAsync(id);
        //}


        public Task<(List<OrderModel> Data, bool HasMorePages)> GetByUserId(string userId, string? orderId, string? status, DateTimeOffset? startDate, DateTimeOffset? endDate, int? page = 1, int? pageSize = 10)
        {
            var query = this.ReadQuery();

            query = query.Where(p => p.UserId == userId);

            if (!string.IsNullOrEmpty(orderId))
            {
                query = query.Where(p => p.Id == orderId);
            }

            if (!string.IsNullOrEmpty(status))
            {
                query = query.Where(p => p.Status == status);
            }

            if (startDate != null)
            {
                query = query.Where(p => p.CreatedAt >= startDate);
            }

            if (endDate != null)
            {
                query = query.Where(p => p.StatusDate <= endDate);
            }

            return query.ExecutePaginatedRead(page, pageSize);
        }
    }
}

