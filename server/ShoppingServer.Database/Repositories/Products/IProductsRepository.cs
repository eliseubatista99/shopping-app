using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductsRepository : IRepository<ProductModel>
    {
        public Task<(List<ProductModel> Data, bool HasMorePages)> Search(string? text, decimal? score, double? maxPrice, double? minPrice, bool? bestSeller, bool? freeShipping, string? category, int? page = 1, int? pageSize = 10);

        public Task<List<ProductModel>> GetByIds(IEnumerable<string> Ids);
        public Task<List<ProductModel>> GetVariations(string groupId);
        public Task<List<string>> GetFirstNCategories(int count);

        public Task<List<(string category, List<ProductModel> products)>> GetProductsByCategories(IEnumerable<string> categories);


    }
}
