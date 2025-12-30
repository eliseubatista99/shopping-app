using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetWishlistOperation : OperationBase<GetWishlistOperationInputDto, GetWishlistOperationOutputDto>
    {
        public GetWishlistOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetWishlistOperationOutputDto
            {

            };
        }
    }
}
