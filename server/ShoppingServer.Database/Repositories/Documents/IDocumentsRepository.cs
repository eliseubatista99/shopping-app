using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IDocumentsRepository : IRepository<DocumentModel>
    {
        public Task<List<DocumentModel>> GetByProductId(string productId);
    }
}
