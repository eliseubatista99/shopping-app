using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ProductOffersOperation : AppOperationBase<OperationInputDto, ProductOffersOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IOrdersRepository ordersRepository;

        public ProductOffersOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            ordersRepository = ExecutionContext.GetService<IOrdersRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var buyAgainProducts = await GetBuyAgainProducts();

            var productGroups = await GetProductGroups();

            output.Data = new ProductOffersOperationOutputDto
            {
                BuyAgain = buyAgainProducts,
                Groups = productGroups
            };
        }


        private async Task<List<ProductOfferGroupDto>> GetProductGroups()
        {
            var userId = this.GetUserIdFromToken();

            var categories = await productsRepository.GetFirstNCategories(4);
            var productGroupsInDb = await productsRepository.GetProductsByCategories(categories);
            var allProductsInDb = productGroupsInDb.SelectMany(o => o.products).ToList();


            var builtProducts = await ObjectsFactory.BuildProducts(allProductsInDb, this.ExecutionContext);
            var groupedProducts = builtProducts.GroupBy(p => p.Category);

            return groupedProducts.Select(g => new ProductOfferGroupDto
            {
                Category = g.Key,
                Products = g.ToList()
            }).ToList();
        }

        private async Task<List<ProductDto>> GetBuyAgainProducts()
        {
            var userId = this.GetUserIdFromToken();

            var buyAgainProducts = new List<ProductModel>();
            var userOrders = await ordersRepository.GetByUserId(userId, page: 1, pageSize: 4);

            if (userOrders.Data.Count > 0)
            {
                var orders = await ObjectsFactory.BuildOrdersList(userOrders.Data, this.ExecutionContext);
                var productIds = orders.SelectMany(o => o.Products).Select(p => p.ProductId).Distinct();
                buyAgainProducts = await productsRepository.GetByIds(productIds);

                // Get categories from bought products
                //categories = buyAgainProducts.Select(p => p.Category).Distinct().Take(4).ToList();
            }

            var result = await ObjectsFactory.BuildProducts(buyAgainProducts, this.ExecutionContext);

            return result;
        }
    }
}
