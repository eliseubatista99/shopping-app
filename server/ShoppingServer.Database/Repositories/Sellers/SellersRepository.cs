using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class SellersRepository : BaseAppRepository<SellerModel>, ISellersRepository
    {
        public SellersRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<SellerModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }
    }
}

