using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SetDefaultPaymentMethodOperation : OperationBase<SetDefaultPaymentMethodOperationInputDto, SetDefaultPaymentMethodOperationOutputDto>
    {
        public SetDefaultPaymentMethodOperation(BaseAppController _controller) : base(_controller)
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
