using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IAddressesRepository : IRepository<AddressModel>
    {
        public Task<List<AddressModel>> GetByUserId(string userId);

        public Task<AddressModel?> GetDefaultAddressOfUser(string userId);
    }
}
