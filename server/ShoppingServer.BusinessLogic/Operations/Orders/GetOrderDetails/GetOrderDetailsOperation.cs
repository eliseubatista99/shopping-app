using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetOrderDetailsOperation : AppOperationBase<GetOrderDetailsOperationInputDto, GetOrderDetailsOperationOutputDto>
    {
        public GetOrderDetailsOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetOrderDetailsOperationOutputDto
            {

            };
        }
    }
}
