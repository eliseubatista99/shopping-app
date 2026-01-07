using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class AddressesRepository : BaseAppRepository<AddressModel>, IAddressesRepository
    {
        public AddressesRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<AddressModel>> GetByUserId(string userId)
        {
            return await _dbSet.AsNoTracking().Where(i => i.UserId == userId).ToListAsync();
        }

        public async Task<AddressModel?> GetDefaultAddressOfUser(string userId)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(i => i.UserId == userId && i.IsDefault.GetValueOrDefault());
        }
    }
}
