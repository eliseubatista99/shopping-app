using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.PaymentMethods
{
    public class DeletePaymentMethodOperation : OperationBase<DeletePaymentMethodOperationInputDto, DeletePaymentMethodOperationOutputDto>
    {
        public DeletePaymentMethodOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new DeletePaymentMethodOperationOutputDto
            {

            };
        }
    }
}
