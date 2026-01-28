using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IProductsRepository : IRepository<ProductModel>
    {
        Task<ProductModel?> GetByIdAsync(string id, bool onlyActive = true);

        public Task<(List<ProductModel> Data, bool HasMorePages)> Search(string? text, decimal? score, double? maxPrice, double? minPrice, bool? bestSeller, bool? freeShipping, string? category, int? page = 1, int? pageSize = 10, bool onlyActive = true);

        public Task<List<ProductModel>> GetByIds(IEnumerable<string> Ids, bool onlyActive = true);
        public Task<List<ProductModel>> GetVariations(string groupId, bool onlyActive = true);
    }
}
