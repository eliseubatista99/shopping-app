using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class OrderStatussRepository : BaseAppRepository<OrderStatusModel>, IOrderStatussRepository
    {
        public OrderStatussRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<OrderStatusModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }
    }
}

