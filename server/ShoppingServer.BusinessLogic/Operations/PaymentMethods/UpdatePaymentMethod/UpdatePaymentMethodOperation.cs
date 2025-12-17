using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdatePaymentMethodOperation : OperationBase<UpdatePaymentMethodOperationInputDto, UpdatePaymentMethodOperationOutputDto>
    {
        public UpdatePaymentMethodOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdatePaymentMethodOperationOutputDto
            {

            };
        }
    }
}
