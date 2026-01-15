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
            return await this.ReadQuery().Where(i => i.UserId == userId).ToListAsync();
        }

        public async Task<bool> SetNewDefaultAddress(string addressId, bool saveChanges = true)
        {
            var success = false;

            success = await UpdateAsync(
                filter: i => i.IsDefault == true,
                updateAction: entity =>
                {
                    entity.IsDefault = false;
                },
                saveChanges: false
            );

            if (!success)
            {
                return false;
            }

            success = await UpdateAsync(
                filter: i => i.Id == addressId,
                updateAction: entity =>
                {
                    entity.IsDefault = true;
                },
                saveChanges: false
            );

            if (saveChanges && success)
            {
                return await SaveChangesAsync();
            }

            return success;
        }
    }
}
