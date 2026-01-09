using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductsRepository : IRepository<ProductModel>
    {
        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
