using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductsRepository : IRepository<ProductModel>
    {
    }
}
