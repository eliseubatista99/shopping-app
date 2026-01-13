using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class RelatedProductsRepository : BaseAppRepository<RelatedProductModel>, IRelatedProductsRepository
    {
        public RelatedProductsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<RelatedProductModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public Task<List<RelatedProductModel>> GetRelatedProducts(string id)
        {
            return this.ReadQuery().Where(i => i.ProductId == id).ToListAsync();
        }
    }
}

