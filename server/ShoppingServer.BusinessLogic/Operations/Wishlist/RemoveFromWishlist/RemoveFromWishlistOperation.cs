using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RemoveFromWishlistOperation : AppOperationBase<RemoveFromWishlistOperationInputDto, RemoveFromWishlistOperationOutputDto>
    {
        public RemoveFromWishlistOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new RemoveFromWishlistOperationOutputDto
            {

            };
        }
    }
}
