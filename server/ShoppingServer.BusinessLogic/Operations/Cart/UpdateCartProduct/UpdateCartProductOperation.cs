using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateCartProductOperation : AppOperationBase<UpdateCartProductOperationInputDto, UpdateCartProductOperationOutputDto>
    {
        private ICartsRepository cartsRepository;

        public UpdateCartProductOperation(IExecutionContext _context) : base(_context)
        {
            cartsRepository = this.ExecutionContext.GetService<ICartsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.Products == null || input?.Products?.Count < 1)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("Products cannot be empty"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var cartItemsInDb = await cartsRepository.GetUserCart(userId);
            List<CartModel> itemsToUpdate = new List<CartModel>();

            foreach (var cartItem in cartItemsInDb)
            {
                var newItemData = input!.Products.FirstOrDefault(p => p.ProductId == cartItem.ProductId);

                if (newItemData != null)
                {
                    if (newItemData.Quantity != null && newItemData.Quantity != cartItem.Quantity)
                    {
                        cartItem.Quantity = newItemData.Quantity.GetValueOrDefault();
                    }

                    if (newItemData.IsSelected != null && newItemData.IsSelected != cartItem.IsSelected)
                    {
                        cartItem.IsSelected = newItemData.IsSelected.GetValueOrDefault();
                    }

                    itemsToUpdate.Add(cartItem);
                }
            }

            var result = await cartsRepository.UpdateCartItems(itemsToUpdate, userId, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to update products in cart"));
                return;
            }

            cartItemsInDb = await cartsRepository.GetUserCart(userId);

            output.Data = new UpdateCartProductOperationOutputDto
            {
                Products = this.MapperProvider.Map<List<CartModel>, List<CartProductDto>>(cartItemsInDb),
            };
        }
    }
}
