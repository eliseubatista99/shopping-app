using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdatePaymentMethodOperation : AppOperationBase<UpdatePaymentMethodOperationInputDto, UpdatePaymentMethodOperationOutputDto>
    {
        public UpdatePaymentMethodOperation(BaseAppController _controller) : base(_controller)
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
