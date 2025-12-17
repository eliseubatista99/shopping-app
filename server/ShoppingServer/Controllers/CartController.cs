using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;

namespace ShoppingServer.Controllers
{
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
        public Task<OperationOutput<AddToCartOperationOutputDto>> AddToCart([FromBody] AddToCartOperationInputDto input)
        {
            return addToCartOperation.Execute(input);
        }

        [HttpGet("/api/GetCart")]
        public Task<OperationOutput<GetCartOperationOutputDto>> GetCart()
        {
            return getCartOperation.Execute(new VoidDto());
        }

        //[HttpDelete("/api/RemoveFromCart")]
        //public Task<OperationOutput<RemoveFromCartOperationOutputDto>> RemoveFromCart([FromQuery] List<string> productIds)
        //{
        //    return removeFromCartOperation.Execute(new RemoveFromCartOperationInputDto
        //    {
        //        ProductIds = productIds,
        //    });
        //}

        [HttpDelete("/api/RemoveFromCart")]
        public Task<OperationOutput<RemoveFromCartOperationOutputDto>> RemoveFromCart([FromQuery] RemoveFromCartOperationInputDto input)
        {
            return removeFromCartOperation.Execute(input);
        }


        [HttpPatch("/api/UpdateCartProduct")]
        public Task<OperationOutput<UpdateCartProductOperationOutputDto>> UpdateCartProduct([FromBody] UpdateCartProductOperationInputDto input)
        {
            return updateCartProductOperation.Execute(input);
        }
    }
}
