using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductImagesRepository : BaseAppRepository<ProductImageModel>, IProductImagesRepository
    {
        public ProductImagesRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductImageModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<ProductImageModel> GetProductImage(string id)
        {
            return this.ReadQuery().Where(i => i.ProductId == id).OrderBy(i => i.SortOrder).FirstAsync();
        }

        public Task<List<ProductImageModel>> GetProductImages(string id)
        {
            return this.ReadQuery().Where(i => i.ProductId == id).OrderBy(i => i.SortOrder).ToListAsync();
        }

        //public Task<List<ProductImageModel>> GetProductsImages(List<string> productIds)
        public Task<List<IGrouping<string, ProductImageModel>>> GetProductsImages(IEnumerable<string> productIds)
        {
            return this.ReadQuery().
                  Where(i => productIds.Contains(i.ProductId))
                  .OrderBy(i => i.SortOrder)
                  .GroupBy(i => i.ProductId)
                  //.Select(g => new ProductImageModel
                  //{
                  //    Id = g.Key,
                  //    ProductId = g.Key,
                  //    Image = g.OrderBy(i => i.SortOrder).First().Image,
                  //    SortOrder = 0,
                  //})
                  .ToListAsync();
        }
    }
}

