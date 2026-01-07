using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class DeletePaymentMethodOperation : AppOperationBase<DeletePaymentMethodOperationInputDto, DeletePaymentMethodOperationOutputDto>
    {
        public DeletePaymentMethodOperation(BaseAppController _controller) : base(_controller)
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
