using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IBannersRepository : IRepository<BannerModel>
    {
        public Task<List<BannerModel>> GetAllAsync();
    }
}
