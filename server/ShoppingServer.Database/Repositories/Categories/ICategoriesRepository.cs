using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ICategoriesRepository : IRepository<CategoryModel>
    {
        public Task<List<CategoryModel>> GetByIds(IEnumerable<string> ids);
    }
}
