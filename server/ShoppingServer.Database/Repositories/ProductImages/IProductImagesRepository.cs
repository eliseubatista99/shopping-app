using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductImagesRepository : IRepository<ProductImageModel>
    {
        public Task<ProductImageModel> GetProductImage(string id);

        public Task<List<ProductImageModel>> GetProductImages(string id);
    }
}
