using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        private GetClientOrdersOperation getClientOrdersOperation;
        private GetOrderDetailsOperation getOrderDetailsOperation;

        public OrdersController()
        {
            getClientOrdersOperation = new GetClientOrdersOperation(this);
            getOrderDetailsOperation = new GetOrderDetailsOperation(this);
        }

        [HttpGet("/api/GetClientOrders")]
        public Task<OperationOutput<GetClientOrdersOperationOutputDto>> GetClientOrders()
        {
            return getClientOrdersOperation.Execute(new GetClientOrdersOperationInputDto());
        }


        [HttpGet("/api/GetOrderDetails")]
        public Task<OperationOutput<GetOrderDetailsOperationOutputDto>> GetOrderDetails([FromQuery] GetOrderDetailsOperationInputDto input)
        {
            return getOrderDetailsOperation.Execute(input);
        }
    }
}
