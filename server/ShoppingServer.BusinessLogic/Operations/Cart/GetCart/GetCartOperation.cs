using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Cart
{
    public class GetCartOperation : OperationBase<GetCartOperationInputDto, GetCartOperationOutputDto>
    {
        public GetCartOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetCartOperationOutputDto
            {

            };
        }
    }
}
