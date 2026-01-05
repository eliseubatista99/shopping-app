using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Providers.Users
{
    public interface IUsersDatabaseProvider
    {
        public UserEntry? GetUserByEmail(string email);

        public UserEntry? GetUserByPhoneNumber(string phoneNumber);

        public bool AddUser(UserEntry entry);
    }
}
