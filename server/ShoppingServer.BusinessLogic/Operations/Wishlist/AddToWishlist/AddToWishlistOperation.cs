using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddToWishlistOperation : OperationBase<AddToWishlistOperationInputDto, AddToWishlistOperationOutputDto>
    {
        public AddToWishlistOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddToWishlistOperationOutputDto
            {

            };
        }
    }
}
