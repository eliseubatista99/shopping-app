using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class AddressesRepository : BaseAppRepository<AddressModel>, IAddressesRepository
    {
        public AddressesRepository(AppDbContext context) : base(context)
        {
        }

        public Task<AddressModel?> GetByIdAsync(string id, bool onlyActive = true)
        {
            var query = this.ReadQuery();

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }

        public Task<List<AddressModel>> GetByUserId(string userId, bool onlyActive = true)
        {
            var query = this.ReadQuery().Where(i => i.UserId == userId);

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.ToListAsync();
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
