using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetCheckoutInfoOperation : AppOperationBase<GetCheckoutInfoOperationInputDto, GetCheckoutInfoOperationOutputDto>
    {
        public GetCheckoutInfoOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetCheckoutInfoOperationOutputDto
            {

            };
        }
    }
}
