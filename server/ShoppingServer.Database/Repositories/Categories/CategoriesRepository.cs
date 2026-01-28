using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class CategoriesRepository : BaseAppRepository<CategoryModel>, ICategoriesRepository
    {
        public CategoriesRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<CategoryModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<List<CategoryModel>> GetByIds(IEnumerable<string> ids)
        {
            return this.ReadQuery().Where(c => ids.Contains(c.Id)).ToListAsync();
        }
    }
}

