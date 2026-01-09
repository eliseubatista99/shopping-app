using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IDocumentsRepository : IRepository<DocumentModel>
    {
        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
