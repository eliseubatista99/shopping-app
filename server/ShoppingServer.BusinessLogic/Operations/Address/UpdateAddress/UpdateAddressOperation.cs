using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateAddressOperation : AppOperationBase<UpdateAddressOperationInputDto, UpdateAddressOperationOutputDto>
    {
        public UpdateAddressOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdateAddressOperationOutputDto
            {

            };
        }
    }
}
