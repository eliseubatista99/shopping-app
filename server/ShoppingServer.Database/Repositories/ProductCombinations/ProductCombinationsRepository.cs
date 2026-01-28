using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductCombinationsRepository : BaseAppRepository<ProductCombinationModel>, IProductCombinationsRepository
    {
        public ProductCombinationsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductCombinationModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<List<ProductCombinationModel>> GetProductCombinations(string id)
        {
            return this.ReadQuery().Where(i => i.ProductId == id).ToListAsync();
        }
    }
}

