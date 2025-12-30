using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WishlistController : ControllerBase
    {
        private AddToWishlistOperation addToWishlistOperation;
        private GetWishlistOperation getWishlistOperation;
        private RemoveFromWishlistOperation removeFromWishlistOperation;

        public WishlistController()
        {
            addToWishlistOperation = new AddToWishlistOperation(this);
            getWishlistOperation = new GetWishlistOperation(this);
            removeFromWishlistOperation = new RemoveFromWishlistOperation(this);
        }


        [HttpPost("/api/AddToWishlist")]
        public Task<OperationOutput<AddToWishlistOperationOutputDto>> AddToWishlist([FromBody] AddToWishlistOperationInputDto input)
        {
            return addToWishlistOperation.Execute(input);
        }

        [HttpGet("/api/GetWishlist")]
        public Task<OperationOutput<GetWishlistOperationOutputDto>> GetWishlist()
        {
            return getWishlistOperation.Execute(new GetWishlistOperationInputDto());
        }

        [HttpDelete("/api/RemoveFromWishlist")]
        public Task<OperationOutput<RemoveFromWishlistOperationOutputDto>> RemoveFromWishlist([FromBody] RemoveFromWishlistOperationInputDto input)
        {
            return removeFromWishlistOperation.Execute(input);
        }
    }
}
