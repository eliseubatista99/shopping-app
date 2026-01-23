using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class UsersRepository : BaseAppRepository<UserModel>, IUsersRepository
    {
        public UsersRepository(AppDbContext context) : base(context)
        {
        }

        public Task<UserModel?> GetByIdAsync(string id, bool onlyActive = true)
        {
            var query = this.ReadQuery();

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.FirstOrDefaultAsync(i => i.Id == id);
        }

        public Task<List<UserModel>> GetByIds(IEnumerable<string> ids)
        {
            return this.ReadQuery().Where(i => ids.Contains(i.Id)).ToListAsync();
        }

        public async Task<UserModel?> GetByEmail(string email)
        {
            return await this.ReadQuery().FirstOrDefaultAsync(i => i.Email == email);
        }

        public async Task<UserModel?> GetUserByPhoneNumber(string phoneNumber)
        {
            return await this.ReadQuery().FirstOrDefaultAsync(i => i.PhoneNumber == phoneNumber);
        }
    }
}
