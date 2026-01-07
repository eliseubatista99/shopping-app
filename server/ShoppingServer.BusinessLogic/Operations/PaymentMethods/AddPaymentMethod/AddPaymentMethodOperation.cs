using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddPaymentMethodOperation : AppOperationBase<AddPaymentMethodOperationInputDto, AddPaymentMethodOperationOutputDto>
    {
        public AddPaymentMethodOperation(BaseAppController _controller) : base(_controller)
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
