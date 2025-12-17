using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Purchase
{
    public class ExecutePurchaseOperation : OperationBase<ExecutePurchaseOperationInputDto, ExecutePurchaseOperationOutputDto>
    {
        public ExecutePurchaseOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new ExecutePurchaseOperationOutputDto
            {

            };
        }
    }
}
