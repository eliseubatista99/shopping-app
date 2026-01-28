using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductCategoriesRepository : BaseAppRepository<ProductCategoryModel>, IProductCategoriesRepository
    {
        public ProductCategoriesRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<ProductCategoryModel>> GetByProductId(string productId)
        {
            return this.ReadQuery().Where(pc => pc.ProductId == productId).ToListAsync();
        }

        public Task<List<(string productId, List<ProductCategoryModel> categories)>> GetByProductsId(IEnumerable<string> productsId)
        {
            return this.ReadQuery()
                .Where(p => productsId.Contains(p.ProductId))
                .GroupBy(p => p.ProductId)
                .Select(g => new ValueTuple<string, List<ProductCategoryModel>>(g.Key, g.ToList()))
                .ToListAsync();
        }

        public Task<List<string>> GetFirstNCategories(int count)
        {
            return this.ReadQuery().Select(p => p.CategoryId).Distinct().Take(4).ToListAsync();
        }

        public Task<List<(string category, List<ProductCategoryModel> products)>> GetProductsByCategories(IEnumerable<string> categories)
        {
            return this.ReadQuery()
                .Where(p => categories.Contains(p.CategoryId))
                .GroupBy(p => p.CategoryId)
                .Select(g => new ValueTuple<string, List<ProductCategoryModel>>(g.Key, g.ToList()))
                .ToListAsync();
        }
    }
}

