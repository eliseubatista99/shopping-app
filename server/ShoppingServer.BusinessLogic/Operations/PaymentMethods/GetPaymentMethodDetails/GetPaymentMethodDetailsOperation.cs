using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetPaymentMethodDetailsOperation : AppOperationBase<GetPaymentMethodDetailsOperationInputDto, GetPaymentMethodDetailsOperationOutputDto>
    {
        public GetPaymentMethodDetailsOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetPaymentMethodDetailsOperationOutputDto
            {

            };
        }
    }
}
