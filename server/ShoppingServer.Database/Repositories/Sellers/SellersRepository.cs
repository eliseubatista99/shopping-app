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

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }
    }
}

