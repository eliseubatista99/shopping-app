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
            return this.ReadQuery().FirstAsync(i => i.ProductId == id);
        }

        public Task<List<ProductImageModel>> GetProductImages(string id)
        {
            return this.ReadQuery().Where(i => i.ProductId == id).ToListAsync();
        }
    }
}

