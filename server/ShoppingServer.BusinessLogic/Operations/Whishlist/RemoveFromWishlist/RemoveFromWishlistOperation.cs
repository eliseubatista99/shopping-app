using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Whishlist
{
    public class RemoveFromWishlistOperation : OperationBase<RemoveFromWishlistOperationInputDto, RemoveFromWishlistOperationOutputDto>
    {
        public RemoveFromWishlistOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new RemoveFromWishlistOperationOutputDto
            {

            };
        }
    }
}
