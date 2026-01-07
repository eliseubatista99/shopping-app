using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class AddressesRepository : BaseAppRepository<AddressModel>, IAddressesRepository
    {
        public AddressesRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }

        public async Task<List<AddressModel>> GetByUserId(string userId)
        {
            return await _dbSet.AsNoTracking().Where(i => i.UserId == userId).ToListAsync();
        }

        public async Task<bool> SetNewDefaultAddress(string addressId, bool saveChanges = true)
        {
            // Remove default address
            var success = await UpdateAsync(
                filter: i => i.IsDefault == true,
                set: setters => setters
                        .SetProperty(e => e.IsDefault, _ => false),
                saveChanges: saveChanges
            );

            if (!success)
            {
                return false;
            }

            // Set new default address
            success = await UpdateAsync(
                filter: i => i.Id == addressId,
                set: setters => setters
                        .SetProperty(e => e.IsDefault, _ => true)
            );

            return success;
        }
    }
}
