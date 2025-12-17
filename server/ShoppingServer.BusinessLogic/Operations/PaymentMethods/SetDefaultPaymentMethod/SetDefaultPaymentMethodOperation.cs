using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SetDefaultPaymentMethodOperation : OperationBase<SetDefaultPaymentMethodOperationInputDto, SetDefaultPaymentMethodOperationOutputDto>
    {
        public SetDefaultPaymentMethodOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new SetDefaultPaymentMethodOperationOutputDto
            {

            };
        }
    }
}
