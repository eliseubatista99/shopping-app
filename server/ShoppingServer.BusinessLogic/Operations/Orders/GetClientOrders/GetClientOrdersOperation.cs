using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetClientOrdersOperation : AppOperationBase<GetClientOrdersOperationInputDto, GetClientOrdersOperationOutputDto>
    {
        public GetClientOrdersOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetClientOrdersOperationOutputDto
            {

            };
        }
    }
}
