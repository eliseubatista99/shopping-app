using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class BannersRepository : BaseAppRepository<BannerModel>, IBannersRepository
    {
        public BannersRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<BannerModel>> GetAllAsync()
        {
            return this.ReadQuery().ToListAsync();
        }
    }
}

