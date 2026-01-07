using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateCartProductOperation : AppOperationBase<UpdateCartProductOperationInputDto, UpdateCartProductOperationOutputDto>
    {
        public UpdateCartProductOperation(BaseAppController _controller) : base(_controller)
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
