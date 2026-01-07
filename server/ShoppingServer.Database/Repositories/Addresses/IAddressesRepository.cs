using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IAddressesRepository : IRepository<AddressModel>
    {
        public Task<List<AddressModel>> GetByUserId(string userId);

        public Task<bool> SetNewDefaultAddress(string addressId, bool saveChanges = true);

        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
