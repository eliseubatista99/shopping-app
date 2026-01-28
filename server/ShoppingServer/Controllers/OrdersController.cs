using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class GetClientOrdersResponseDto : OperationResponseDto<GetClientOrdersOperationOutputDto>;
    public class GetOrderDetailsResponseDto : OperationResponseDto<GetOrderDetailsOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class OrdersController : BaseAppController
    {
        private GetClientOrdersOperation getClientOrdersOperation;
        private GetOrderDetailsOperation getOrderDetailsOperation;

        public OrdersController(IExecutionContext executionContext) : base(executionContext)
        {
            getClientOrdersOperation = new GetClientOrdersOperation(executionContext);
            getOrderDetailsOperation = new GetOrderDetailsOperation(executionContext);
        }

        [HttpGet("/api/GetClientOrders")]
        [Authorize]
        public async Task<GetClientOrdersResponseDto> GetClientOrders([FromQuery] GetClientOrdersOperationInputDto input)
        {
            var response = await getClientOrdersOperation.Execute<GetClientOrdersResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }


        [HttpGet("/api/GetOrderDetails")]
        [Authorize]
        public async Task<GetOrderDetailsResponseDto> GetOrderDetails([FromQuery] GetOrderDetailsOperationInputDto input)
        {
            var response = await getOrderDetailsOperation.Execute<GetOrderDetailsResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
