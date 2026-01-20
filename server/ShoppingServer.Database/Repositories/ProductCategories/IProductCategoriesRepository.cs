using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductCategoriesRepository : IRepository<ProductCategoryModel>
    {
        Task<List<ProductCategoryModel>> GetByProductId(string productId);
        Task<List<(string productId, List<ProductCategoryModel> categories)>> GetByProductsId(IEnumerable<string> productsId);

        public Task<List<string>> GetFirstNCategories(int count);

        public Task<List<(string category, List<ProductCategoryModel> products)>> GetProductsByCategories(IEnumerable<string> categories);
    }
}
