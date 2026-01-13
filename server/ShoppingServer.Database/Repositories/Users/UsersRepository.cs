using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class UsersRepository : BaseAppRepository<UserModel>, IUsersRepository
    {
        public UsersRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<UserModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
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
