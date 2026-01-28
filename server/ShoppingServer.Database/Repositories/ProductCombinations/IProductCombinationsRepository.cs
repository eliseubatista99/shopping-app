using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductCombinationsRepository : IRepository<ProductCombinationModel>
    {
        public Task<List<ProductCombinationModel>> GetProductCombinations(string id);
    }
}
