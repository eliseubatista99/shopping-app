using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RemoveFromCartOperation : OperationBase<RemoveFromCartOperationInputDto, RemoveFromCartOperationOutputDto>
    {
        public RemoveFromCartOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new RemoveFromCartOperationOutputDto
            {

            };
        }
    }
}
