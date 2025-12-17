using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Cart
{
    public class AddToCartOperation : OperationBase<AddToCartOperationInputDto, AddToCartOperationOutputDto>
    {
        public AddToCartOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddToCartOperationOutputDto
            {

            };
        }
    }
}
