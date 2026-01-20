using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductCategoriesRepository : IRepository<ProductCategoryModel>
    {
    }
}
