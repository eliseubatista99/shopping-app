using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
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
