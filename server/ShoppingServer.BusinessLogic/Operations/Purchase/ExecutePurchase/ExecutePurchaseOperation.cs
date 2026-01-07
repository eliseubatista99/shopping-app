using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ExecutePurchaseOperation : AppOperationBase<ExecutePurchaseOperationInputDto, OperationOutputDto>
    {
        public ExecutePurchaseOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new OperationOutputDto
            {

            };
        }
    }
}
