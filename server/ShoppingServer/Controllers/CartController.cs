using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class AddToCartResponseDto : OperationResponseDto<AddToCartOperationOutputDto>;
    public class GetCartResponseDto : OperationResponseDto<GetCartOperationOutputDto>;
    public class RemoveFromCartResponseDto : OperationResponseDto<RemoveFromCartOperationOutputDto>;
    public class UpdateCartResponseDto : OperationResponseDto<UpdateCartProductOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class CartController : BaseAppController
    {
        private AddToCartOperation addToCartOperation;
        private GetCartOperation getCartOperation;
        private RemoveFromCartOperation removeFromCartOperation;
        private UpdateCartProductOperation updateCartProductOperation;
        public CartController(IExecutionContext executionContext) : base(executionContext)
        {
            addToCartOperation = new AddToCartOperation(executionContext);
            getCartOperation = new GetCartOperation(executionContext);
            removeFromCartOperation = new RemoveFromCartOperation(executionContext);
            updateCartProductOperation = new UpdateCartProductOperation(executionContext);
        }

        [HttpPost("/api/AddToCart")]
        [Authorize]
        public async Task<AddToCartResponseDto> AddToCart([FromBody] AddToCartOperationInputDto input)
        {
            var response = await addToCartOperation.Execute<AddToCartResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/GetCart")]
        [Authorize]
        public async Task<GetCartResponseDto> GetCart()
        {
            var response = await getCartOperation.Execute<GetCartResponseDto>();
            this.Response.StatusCode = response.StatusCode;

            return response;
        }


        [HttpDelete("/api/RemoveFromCart")]
        [Authorize]
        public async Task<RemoveFromCartResponseDto> RemoveFromCart([FromQuery] RemoveFromCartOperationInputDto input)
        {
            var response = await removeFromCartOperation.Execute<RemoveFromCartResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }


        [HttpPatch("/api/UpdateCartProduct")]
        [Authorize]
        public async Task<UpdateCartResponseDto> UpdateCartProduct([FromBody] UpdateCartProductOperationInputDto input)
        {
            var response = await updateCartProductOperation.Execute<UpdateCartResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
