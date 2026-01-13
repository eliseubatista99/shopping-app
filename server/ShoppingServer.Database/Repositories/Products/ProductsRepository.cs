using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ProductsRepository : BaseAppRepository<ProductModel>, IProductsRepository
    {
        public ProductsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<ProductModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }
    }
}

