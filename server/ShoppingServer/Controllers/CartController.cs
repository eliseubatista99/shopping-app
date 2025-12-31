using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.Controllers
{
    public class AddToCartResponseDto : OperationResponseDto<AddToCartOperationOutputDto>;
    public class GetCartResponseDto : OperationResponseDto<GetCartOperationOutputDto>;
    public class RemoveFromCartResponseDto : OperationResponseDto<RemoveFromCartOperationOutputDto>;
    public class UpdateCartResponseDto : OperationResponseDto<UpdateCartProductOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private AddToCartOperation addToCartOperation;
        private GetCartOperation getCartOperation;
        private RemoveFromCartOperation removeFromCartOperation;
        private UpdateCartProductOperation updateCartProductOperation;
        public CartController()
        {
            addToCartOperation = new AddToCartOperation(this);
            getCartOperation = new GetCartOperation(this);
            removeFromCartOperation = new RemoveFromCartOperation(this);
            updateCartProductOperation = new UpdateCartProductOperation(this);
        }

        [HttpPost("/api/AddToCart")]
        public Task<AddToCartResponseDto> AddToCart([FromBody] AddToCartOperationInputDto input)
        {
            return addToCartOperation.Execute<AddToCartResponseDto>(input);
        }

        [HttpGet("/api/GetCart")]
        public Task<GetCartResponseDto> GetCart()
        {
            return getCartOperation.Execute<GetCartResponseDto>();
        }


        [HttpDelete("/api/RemoveFromCart")]
        public Task<RemoveFromCartResponseDto> RemoveFromCart([FromQuery] RemoveFromCartOperationInputDto input)
        {
            return removeFromCartOperation.Execute<RemoveFromCartResponseDto>(input);
        }


        [HttpPatch("/api/UpdateCartProduct")]
        public Task<UpdateCartResponseDto> UpdateCartProduct([FromBody] UpdateCartProductOperationInputDto input)
        {
            return updateCartProductOperation.Execute<UpdateCartResponseDto>(input);
        }
    }
}
