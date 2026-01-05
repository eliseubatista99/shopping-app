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
            getClientOrdersOperation = new GetClientOrdersOperation(this);
            getOrderDetailsOperation = new GetOrderDetailsOperation(this);
        }

        [HttpGet("/api/GetClientOrders")]
        public Task<GetClientOrdersResponseDto> GetClientOrders([FromQuery] GetClientOrdersOperationInputDto input)
        {
            return getClientOrdersOperation.Execute<GetClientOrdersResponseDto>(input);
        }


        [HttpGet("/api/GetOrderDetails")]
        public Task<GetOrderDetailsResponseDto> GetOrderDetails([FromQuery] GetOrderDetailsOperationInputDto input)
        {
            return getOrderDetailsOperation.Execute<GetOrderDetailsResponseDto>(input);
        }
    }
}
