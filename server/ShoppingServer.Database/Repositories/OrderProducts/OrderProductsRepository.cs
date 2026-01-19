using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class OrderProductsRepository : BaseAppRepository<OrderProductModel>, IOrderProductsRepository
    {
        public OrderProductsRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<OrderProductModel>> GetByOrderIds(IEnumerable<string> ordersIds)
        {
            return this.ReadQuery().Where(i => ordersIds.Contains(i.OrderId)).ToListAsync();
        }
    }
}

