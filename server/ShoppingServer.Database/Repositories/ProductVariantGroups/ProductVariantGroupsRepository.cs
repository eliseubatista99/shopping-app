using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductVariantGroupsRepository : BaseAppRepository<ProductVariantGroupModel>, IProductVariantGroupsRepository
    {
        public ProductVariantGroupsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductVariantGroupModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }
    }
}

