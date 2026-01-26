using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;
using Swashbuckle.AspNetCore.Annotations;

namespace ShoppingServer.Controllers
{
    public class AddToWishlistResponseDto : OperationResponseDto<AddToWishlistOperationOutputDto>;
    public class GetWishlistResponseDto : OperationResponseDto<GetWishlistOperationOutputDto>;
    public class RemoveFromWishlistResponseDto : OperationResponseDto<RemoveFromWishlistOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class WishlistController : BaseAppController
    {
        private AddToWishlistOperation addToWishlistOperation;
        private GetWishlistOperation getWishlistOperation;
        private RemoveFromWishlistOperation removeFromWishlistOperation;

        public WishlistController(IExecutionContext executionContext) : base(executionContext)
        {
            addToWishlistOperation = new AddToWishlistOperation(executionContext);
            getWishlistOperation = new GetWishlistOperation(executionContext);
            removeFromWishlistOperation = new RemoveFromWishlistOperation(executionContext);
        }


        [HttpPost("/api/AddToWishlist")]
        [Authorize]
        public async Task<AddToWishlistResponseDto> AddToWishlist([FromBody] AddToWishlistOperationInputDto input)
        {
            var response = await addToWishlistOperation.Execute<AddToWishlistResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [SwaggerOperation(OperationId = "GetWishlist")]
        [HttpGet("/api/GetWishlist")]
        [Authorize]
        public async Task<GetWishlistResponseDto> GetWishlist([FromQuery] GetWishlistOperationInputDto input)
        {
            var response = await getWishlistOperation.Execute<GetWishlistResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpDelete("/api/RemoveFromWishlist")]
        [Authorize]
        public async Task<RemoveFromWishlistResponseDto> RemoveFromWishlist([FromQuery] RemoveFromWishlistOperationInputDto input)
        {
            var response = await removeFromWishlistOperation.Execute<RemoveFromWishlistResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
