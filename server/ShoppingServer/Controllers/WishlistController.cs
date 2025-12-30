using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class AddToWishlistResponseDto : OperationOutput<AddToWishlistOperationOutputDto>;
    public class GetWishlistResponseDto : OperationOutput<GetWishlistOperationOutputDto>;
    public class RemoveFromWishlistResponseDto : OperationOutput<RemoveFromWishlistOperationOutputDto>;

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
        public Task<AddToWishlistResponseDto> AddToWishlist([FromBody] AddToWishlistOperationInputDto input)
        {
            return addToWishlistOperation.Execute<AddToWishlistResponseDto>(input);
        }

        [HttpGet("/api/GetWishlist")]
        public Task<GetWishlistResponseDto> GetWishlist([FromQuery] GetWishlistOperationInputDto input)
        {
            return getWishlistOperation.Execute<GetWishlistResponseDto>(input);
        }

        [HttpDelete("/api/RemoveFromWishlist")]
        public Task<RemoveFromWishlistResponseDto> RemoveFromWishlist([FromBody] RemoveFromWishlistOperationInputDto input)
        {
            return removeFromWishlistOperation.Execute<RemoveFromWishlistResponseDto>(input);
        }
    }
}
