using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class OrdersStatusRepository : BaseAppRepository<OrdersStatusModel>, IOrdersStatusRepository
    {
        public OrdersStatusRepository(AppDbContext context) : base(context)
        {
        }

        //public override Task<OrderStatusModel?> GetByIdAsync(string id)
        //{
        //    return base.GetByIdAsync(id);
        //}

        public Task<List<OrdersStatusModel>> GetByOrderId(string orderId)
        {
            return this.ReadQuery().Where(i => i.OrderId == orderId).ToListAsync();
        }
    }
}

