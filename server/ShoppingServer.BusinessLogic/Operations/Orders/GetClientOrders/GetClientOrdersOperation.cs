using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Orders
{
    public class GetClientOrdersOperation : OperationBase<GetClientOrdersOperationInputDto, GetClientOrdersOperationOutputDto>
    {
        public GetClientOrdersOperation(ControllerBase _controller) : base(_controller)
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
