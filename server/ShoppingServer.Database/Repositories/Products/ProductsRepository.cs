using Database.PostgreSql.Extensions;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductsRepository : BaseAppRepository<ProductModel>, IProductsRepository
    {
        public ProductsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<List<ProductModel>> GetByIds(IEnumerable<string> Ids)
        {
            return this.ReadQuery().Where(i => Ids.Contains(i.Id)).ToListAsync();
        }

        public Task<List<string>> GetFirstNCategories(int count)
        {
            return this.ReadQuery().Select(p => p.Category).Distinct().Take(4).ToListAsync();
        }

        public Task<List<(string category, List<ProductModel> products)>> GetProductsByCategories(IEnumerable<string> categories)
        {
            return this.ReadQuery()
                .Where(p => categories.Contains(p.Category))
                .GroupBy(p => p.Category)
                .Select(g => new ValueTuple<string, List<ProductModel>>(g.Key, g.ToList()))
                .ToListAsync();
        }

        public Task<List<ProductModel>> GetVariations(string groupId)
        {
            return this.ReadQuery().Where(p => p.GroupId == groupId).ToListAsync();
        }

        public Task<(List<ProductModel> Data, bool HasMorePages)> Search(string? text, decimal? score, double? maxPrice, double? minPrice, bool? bestSeller, bool? freeShipping, string? category, int? page = 1, int? pageSize = 10)
        {
            var query = this.ReadQuery();

            if (!string.IsNullOrEmpty(text))
            {
                query = query.Where(p => p.Name.Contains(text));
            }

            if (score != null)
            {
                query = query.Where(p => p.Score == score);
            }

            if (maxPrice != null)
            {
                query = query.Where(p => p.Price <= maxPrice);
            }

            if (minPrice != null)
            {
                query = query.Where(p => p.Price >= minPrice);
            }

            if (bestSeller != null)
            {
                query = query.Where(p => p.BestSeller == bestSeller);
            }

            if (freeShipping != null)
            {
                query = query.Where(p => freeShipping.Value ? p.ShippingCost == 0 : p.ShippingCost > 0);
            }

            if (!string.IsNullOrEmpty(category))
            {
                //query = query.Where(p => p.Category == category);
            }

            return query.ExecutePaginatedRead(page, pageSize);
        }
    }
}

