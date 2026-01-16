using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class OrderProductsRepository : BaseAppRepository<OrderProductModel>, IOrderProductsRepository
    {
        public OrderProductsRepository(AppDbContext context) : base(context)
        {
        }

        //public override Task<OrderProductModel?> GetByIdAsync(string id)
        //{
        //    return base.GetByIdAsync(id);
        //}

        public Task<List<OrderProductModel>> GetByOrderIds(IEnumerable<string> orderId)
        {
            return this.ReadQuery().Where(i => orderId.Contains(i.OrderId)).ToListAsync();
        }
    }
}

