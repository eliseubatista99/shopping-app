using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddToCartOperation : AppOperationBase<AddToCartOperationInputDto, AddToCartOperationOutputDto>
    {
        private ICartsRepository cartsRepository;

        public AddToCartOperation(BaseAppController _controller) : base(_controller)
        {
            cartsRepository = this.ExecutionContext.GetService<ICartsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.ProductIds == null || input?.ProductIds?.Count < 1)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("ProductIds cannot be empty"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var productsWithQuantity = CartHelper.GetProductsWithQuantity(input!.ProductIds);

            var items = productsWithQuantity.Select(i => new CartModel
            {
                Id = Guid.NewGuid().ToString(),
                ProductId = i.ProductId,
                UserId = userId,
                Quantity = i.Quantity,
                IsSelected = true,
            }).ToList();

            var result = await cartsRepository.AddItemsAsync(items, userId, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to add products to cart"));
                return;
            }

            var productsInDb = await cartsRepository.GetUserCart(userId);

            output.Data = new AddToCartOperationOutputDto
            {
                Products = this.MapperProvider.Map<List<CartModel>, List<CartProductDto>>(productsInDb),
            };
        }
    }
}
