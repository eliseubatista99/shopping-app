using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ICategoriesRepository : IRepository<CategoryModel>
    {
        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
