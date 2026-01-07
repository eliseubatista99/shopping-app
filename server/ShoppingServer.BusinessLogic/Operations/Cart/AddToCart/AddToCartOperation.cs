using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddToCartOperation : AppOperationBase<AddToCartOperationInputDto, AddToCartOperationOutputDto>
    {
        public AddToCartOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddToCartOperationOutputDto
            {

            };
        }
    }
}
