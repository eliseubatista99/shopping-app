using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateClientInfoOperation : AppOperationBase<UpdateClientInfoOperationInputDto, UpdateClientInfoOperationOutputDto>
    {
        public UpdateClientInfoOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdateClientInfoOperationOutputDto
            {

            };
        }
    }
}
