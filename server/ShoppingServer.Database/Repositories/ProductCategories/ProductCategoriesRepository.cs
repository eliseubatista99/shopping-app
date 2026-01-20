using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductCategoriesRepository : BaseAppRepository<ProductCategoryModel>, IProductCategoriesRepository
    {
        public ProductCategoriesRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductCategoryModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }
    }
}

