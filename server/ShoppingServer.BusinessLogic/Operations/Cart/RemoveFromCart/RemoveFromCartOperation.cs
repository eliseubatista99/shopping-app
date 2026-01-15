using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RemoveFromCartOperation : AppOperationBase<RemoveFromCartOperationInputDto, RemoveFromCartOperationOutputDto>
    {
        private ICartsRepository cartsRepository;

        public RemoveFromCartOperation(BaseAppController _controller) : base(_controller)
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
            var result = await cartsRepository.DeleteByIds(input!.ProductIds, userId, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to delete products from cart"));
                return;
            }

            var productsInDb = await cartsRepository.GetUserCart(userId);

            output.Data = new RemoveFromCartOperationOutputDto
            {
                Products = this.MapperProvider.Map<List<CartModel>, List<CartProductDto>>(productsInDb),
            };
        }
    }
}
