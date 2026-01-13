using Microsoft.EntityFrameworkCore;
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

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }
    }
}

