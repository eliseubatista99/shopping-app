using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;
using Swashbuckle.AspNetCore.Annotations;

namespace ShoppingServer.Controllers
{
    public class AddToWishlistResponseDto : OperationResponseDto<AddToWishlistOperationOutputDto>;
    public class GetWishlistResponseDto : OperationResponseDto<GetWishlistOperationOutputDto>;
    public class RemoveFromWishlistResponseDto : OperationResponseDto<RemoveFromWishlistOperationOutputDto>;

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

        [SwaggerOperation(OperationId = "GetWishlist")]
        [HttpGet("/api/GetWishlist")]
        public Task<GetWishlistResponseDto> GetWishlist([FromQuery] GetWishlistOperationInputDto input)
        {
            return getWishlistOperation.Execute<GetWishlistResponseDto>(input);
        }

        [HttpDelete("/api/RemoveFromWishlist")]
        public Task<RemoveFromWishlistResponseDto> RemoveFromWishlist([FromQuery] RemoveFromWishlistOperationInputDto input)
        {
            return removeFromWishlistOperation.Execute<RemoveFromWishlistResponseDto>(input);
        }
    }
}
