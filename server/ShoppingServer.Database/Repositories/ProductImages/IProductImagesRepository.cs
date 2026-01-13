using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductImagesRepository : IRepository<ProductImageModel>
    {
        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
