using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IUsersRepository : IRepository<UserModel>
    {
        Task<UserModel?> GetByIdAsync(string id, bool onlyActive = true);

        public Task<List<UserModel>> GetByIds(IEnumerable<string> ids);

        public Task<UserModel?> GetByEmail(string email);

        public Task<UserModel?> GetUserByPhoneNumber(string phoneNumber);
    }
}
