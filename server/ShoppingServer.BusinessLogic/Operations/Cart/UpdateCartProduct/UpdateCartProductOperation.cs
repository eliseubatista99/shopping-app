using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateCartProductOperation : OperationBase<UpdateCartProductOperationInputDto, UpdateCartProductOperationOutputDto>
    {
        public UpdateCartProductOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdateCartProductOperationOutputDto
            {

            };
        }
    }
}
