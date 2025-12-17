using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Address;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private AddAddressOperation addAddressOperation;

        private ITestsDatabaseProvider testsDatabase;
        public AddressController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
            addAddressOperation = new AddAddressOperation(this);
        }

        [HttpPost("/api/AddAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> Authenticate([FromBody] AddAddressOperationInputDto input)
        {
            return addAddressOperation.Execute(input);
        }
    }
}
