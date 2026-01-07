using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddToWishlistOperation : AppOperationBase<AddToWishlistOperationInputDto, AddToWishlistOperationOutputDto>
    {
        public AddToWishlistOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddToWishlistOperationOutputDto
            {

            };
        }
    }
}
