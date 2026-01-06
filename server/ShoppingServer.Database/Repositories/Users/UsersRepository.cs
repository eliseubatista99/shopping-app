using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class UsersRepository : BaseAppRepository<UserEntry>, IUsersRepository
    {
        public UsersRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<UserEntry?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<UserEntry?> GetByEmail(string email)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(i => i.Email == email);
        }

        public async Task<UserEntry?> GetUserByPhoneNumber(string phoneNumber)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(i => i.PhoneNumber == phoneNumber);
        }

        public override Task<bool> AddAsync(UserEntry entity)
        {
            return base.AddAsync(entity);
        }
    }
}
