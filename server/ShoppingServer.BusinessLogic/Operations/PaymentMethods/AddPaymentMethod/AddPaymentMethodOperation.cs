using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.PaymentMethods
{
    public class AddPaymentMethodOperation : OperationBase<AddPaymentMethodOperationInputDto, AddPaymentMethodOperationOutputDto>
    {
        public AddPaymentMethodOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddPaymentMethodOperationOutputDto
            {

            };
        }
    }
}
