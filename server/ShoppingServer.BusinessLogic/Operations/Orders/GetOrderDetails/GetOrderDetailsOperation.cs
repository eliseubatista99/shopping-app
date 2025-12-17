using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetOrderDetailsOperation : OperationBase<GetOrderDetailsOperationInputDto, GetOrderDetailsOperationOutputDto>
    {
        public GetOrderDetailsOperation(ControllerBase _controller) : base(_controller)
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
