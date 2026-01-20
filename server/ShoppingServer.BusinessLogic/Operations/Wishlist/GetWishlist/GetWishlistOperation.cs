using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetWishlistOperation : AppOperationBase<GetWishlistOperationInputDto, GetWishlistOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IWishlistsRepository wishlistsRepository;

        public GetWishlistOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            wishlistsRepository = ExecutionContext.GetService<IWishlistsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var userWishlist = await wishlistsRepository.GetByUserId(userId, input!.Page, input!.PageSize);
            var wishlistedProducts = await productsRepository.GetByIds(userWishlist.Data.Select(w => w.ProductId));

            var products = await ObjectsFactory.BuildProducts(wishlistedProducts, this.ExecutionContext);

            output.Data = new GetWishlistOperationOutputDto
            {
                Products = products,
                HasMorePages = userWishlist.HasMorePages
            };
        }
    }
}
