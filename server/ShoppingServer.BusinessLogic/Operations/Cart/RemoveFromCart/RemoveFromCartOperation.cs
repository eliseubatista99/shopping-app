using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RemoveFromCartOperation : AppOperationBase<RemoveFromCartOperationInputDto, RemoveFromCartOperationOutputDto>
    {
        public RemoveFromCartOperation(BaseAppController _controller) : base(_controller)
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
