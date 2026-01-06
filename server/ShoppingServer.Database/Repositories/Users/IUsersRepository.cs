using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IUsersRepository : IRepository<UserEntry>
    {
        public Task<UserEntry?> GetByEmail(string email);

        public Task<UserEntry?> GetUserByPhoneNumber(string phoneNumber);
    }
}
