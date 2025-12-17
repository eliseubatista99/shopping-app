using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Purchase
{
    public class GetCheckoutInfoOperation : OperationBase<GetCheckoutInfoOperationInputDto, GetCheckoutInfoOperationOutputDto>
    {
        public GetCheckoutInfoOperation(ControllerBase _controller) : base(_controller)
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
