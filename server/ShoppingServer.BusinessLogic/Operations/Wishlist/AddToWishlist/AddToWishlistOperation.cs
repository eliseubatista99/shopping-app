using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddToWishlistOperation : AppOperationBase<AddToWishlistOperationInputDto, AddToWishlistOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IWishlistsRepository wishlistsRepository;

        public AddToWishlistOperation(IExecutionContext _context) : base(_context)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            wishlistsRepository = ExecutionContext.GetService<IWishlistsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var productInDb = await productsRepository.GetByIdAsync(input?.ProductId ?? string.Empty);

            if (productInDb == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("Invalid product"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var wishlistItem = new WishlistModel
            {
                UserId = this.GetUserIdFromToken(),
                ProductId = input!.ProductId,
                CreatedAt = DateTimeOffset.UtcNow
            };

            var success = await wishlistsRepository.AddAsync(wishlistItem);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to add to wishlist"));
                return;
            }

            var userWishlist = await wishlistsRepository.GetByUserId(userId, 1, 100);
            var wishlistedProducts = await productsRepository.GetByIds(userWishlist.Data.Select(w => w.ProductId));

            var products = await ObjectsFactory.BuildProducts(wishlistedProducts, this.ExecutionContext);

            output.Data = new AddToWishlistOperationOutputDto
            {
                UpdatedWishlist = products
            };
        }
    }
}
