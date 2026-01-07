using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class DeleteAddressOperation : AppOperationBase<DeleteAddressOperationInputDto, DeleteAddressOperationOutputDto>
    {
        public DeleteAddressOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new DeleteAddressOperationOutputDto
            {

            };
        }
    }
}
