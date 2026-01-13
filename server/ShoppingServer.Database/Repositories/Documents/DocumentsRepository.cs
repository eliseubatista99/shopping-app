using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class DocumentsRepository : BaseAppRepository<DocumentModel>, IDocumentsRepository
    {
        public DocumentsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<DocumentModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<List<DocumentModel>> GetByProductId(string productId)
        {
            return _dbSet.AsNoTracking().Where(p => p.ProductId == productId).ToListAsync();
        }
    }
}

