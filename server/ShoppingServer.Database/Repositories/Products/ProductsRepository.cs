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

        public Task<ProductModel?> GetByIdAsync(string id, bool onlyActive = true)
        {
            var query = this.ReadQuery();

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.FirstOrDefaultAsync(i => i.Id == id);
        }

        public Task<List<ProductModel>> GetByIds(IEnumerable<string> Ids, bool onlyActive = true)
        {
            var query = this.ReadQuery().Where(i => Ids.Contains(i.Id));

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.ToListAsync();
        }

        public Task<List<ProductModel>> GetVariations(string groupId, bool onlyActive = true)
        {
            var query = this.ReadQuery().Where(i => i.GroupId == groupId);

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.ToListAsync();
        }

        public Task<(List<ProductModel> Data, bool HasMorePages)> Search(string? text, decimal? score, double? maxPrice, double? minPrice, bool? bestSeller, bool? freeShipping, string? category, int? page = 1, int? pageSize = 10, bool onlyActive = true)
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

            if (onlyActive)
            {
                query = query.Where(p => p.IsDbActive);
            }

            return query.ExecutePaginatedRead(page, pageSize);
        }
    }
}

