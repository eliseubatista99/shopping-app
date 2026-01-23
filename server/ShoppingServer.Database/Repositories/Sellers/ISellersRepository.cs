using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ISellersRepository : IRepository<SellerModel>
    {
        Task<SellerModel?> GetByIdAsync(string id, bool onlyActive = true);
    }
}
