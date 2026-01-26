using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class SellersRepository : BaseAppRepository<SellerModel>, ISellersRepository
    {
        public SellersRepository(AppDbContext context) : base(context)
        {
        }

        public Task<SellerModel?> GetByIdAsync(string id, bool onlyActive = true)
        {
            var query = this.ReadQuery();

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.FirstOrDefaultAsync(i => i.Id == id);
        }

        public Task<List<SellerModel>> GetByIds(IEnumerable<string> Ids, bool onlyActive = true)
        {
            var query = this.ReadQuery().Where(i => Ids.Contains(i.Id));

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.ToListAsync();
        }
    }
}

