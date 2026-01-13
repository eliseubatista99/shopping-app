using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IRelatedProductsRepository : IRepository<RelatedProductModel>
    {
        public Task<List<RelatedProductModel>> GetRelatedProducts(string id);
    }
}
