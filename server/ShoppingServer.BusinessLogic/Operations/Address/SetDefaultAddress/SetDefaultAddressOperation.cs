using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SetDefaultAddressOperation : AppOperationBase<SetDefaultAddressOperationInputDto, SetDefaultAddressOperationOutputDto>
    {
        public SetDefaultAddressOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new SetDefaultAddressOperationOutputDto
            {

            };
        }
    }
}
