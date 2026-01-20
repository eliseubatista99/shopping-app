using Microsoft.AspNetCore.Http;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RemoveFromWishlistOperation : AppOperationBase<RemoveFromWishlistOperationInputDto, RemoveFromWishlistOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IWishlistsRepository wishlistsRepository;

        public RemoveFromWishlistOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            wishlistsRepository = ExecutionContext.GetService<IWishlistsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();


            if (string.IsNullOrEmpty(input?.ProductId))
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("Product Id Cannot be empty"));
                return;
            }

            var success = await wishlistsRepository.DeleteUserProduct(userId, input.ProductId);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to delete from wishlist"));
                return;
            }

            var userWishlist = await wishlistsRepository.GetByUserId(userId, 1, 100);
            var wishlistedProducts = await productsRepository.GetByIds(userWishlist.Data.Select(w => w.ProductId));

            var products = await ObjectsFactory.BuildProducts(wishlistedProducts, this.ExecutionContext);

            output.Data = new RemoveFromWishlistOperationOutputDto
            {
                UpdatedWishlist = products
            };
        }
    }
}
