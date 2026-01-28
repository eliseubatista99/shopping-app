using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IAddressesRepository : IRepository<AddressModel>
    {
        Task<AddressModel?> GetByIdAsync(string id, bool onlyActive = true);

        public Task<List<AddressModel>> GetByUserId(string userId, bool onlyActive = true);

        public Task<bool> SetNewDefaultAddress(string addressId, bool saveChanges = true);

        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
