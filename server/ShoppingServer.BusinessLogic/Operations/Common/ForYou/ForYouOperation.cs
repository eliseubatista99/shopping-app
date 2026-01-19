using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ForYouOperation : AppOperationBase<OperationInputDto, ForYouOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IOrdersRepository ordersRepository;
        private IReviewsRepository reviewsRepository;

        public ForYouOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            ordersRepository = ExecutionContext.GetService<IOrdersRepository>();
            reviewsRepository = ExecutionContext.GetService<IReviewsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);

            var reviewsInDb = await reviewsRepository.GetByUserId(userId);
            var userOrdersInDb = await ordersRepository.GetByUserId(userId, page: 1, pageSize: 100);
            var ordersWithProducts = await ObjectsFactory.BuildOrdersList(userOrdersInDb.Data, this.ExecutionContext);

            var lastReviewInDb = await reviewsRepository.GetLastReview(userId);
            var lastReview = await ObjectsFactory.BuildReview(lastReviewInDb, this.ExecutionContext);

            var productNeedingReview = await GetProductNeedingReview(ordersWithProducts);

            output.Data = new ForYouOperationOutputDto
            {
                Orders = ordersWithProducts.Take(3).ToList(),
                FavoritesImages = new List<string>(),
                FavoritesCount = 2,
                NeedingReviewProductId = productNeedingReview?.Id,
                NeedingReviewProductImage = productNeedingReview?.Image,
                Review = lastReview
            };
        }

        private async Task<ProductDto?> GetProductNeedingReview(List<OrderDto> orders)
        {
            var userId = this.GetUserIdFromToken();

            var allOrderProductids = new List<string>();

            orders.ForEach(order =>
            {
                allOrderProductids.AddRange(order.Products.Select(p => p.ProductId));
            });

            var allProductsWithReviewInDb = await reviewsRepository.GetByProductIds(userId, allOrderProductids);
            var allProductsWithReviewIds = allProductsWithReviewInDb.Select(p => p.Id);

            // Get all productIds without review
            var allProductsNeedingReview = allOrderProductids.Except(allProductsWithReviewIds).ToList();

            if (allProductsNeedingReview.Count < 1)
            {
                return null;
            }

            var productNeedingReview = await productsRepository.GetByIdAsync(allProductsNeedingReview.First());

            if (productNeedingReview == null)
            {
                return null;
            }

            return this.MapperProvider.Map<ProductModel, ProductDto>(productNeedingReview);
        }
    }
}

