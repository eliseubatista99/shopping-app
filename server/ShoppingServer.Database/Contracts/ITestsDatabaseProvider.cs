using ShoppingApp.Database.Models;

namespace ShoppingApp.Database.Contracts
{
    public interface ITestsDatabaseProvider
    {
        public IList<TableTestsEntry> GetAllTests();
    }
}
