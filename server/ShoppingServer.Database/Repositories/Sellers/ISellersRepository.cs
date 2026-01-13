using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface ISellersRepository : IRepository<SellerModel>
    {
    }
}
