using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Address;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        private AddAddressOperation addAddressOperation;

        public OrdersController()
        {
            addAddressOperation = new AddAddressOperation(this);
        }

        [HttpPost("/api/AddAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> AddAddress([FromBody] AddAddressOperationInputDto input)
        {
            return addAddressOperation.Execute(input);
        }
    }
}
