using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IUsersRepository : IRepository<UserModel>
    {
        public Task<UserModel?> GetByEmail(string email);

        public Task<UserModel?> GetUserByPhoneNumber(string phoneNumber);
    }
}
