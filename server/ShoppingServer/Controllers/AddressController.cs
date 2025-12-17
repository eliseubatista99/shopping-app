using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Address;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private AddAddressOperation addAddressOperation;
        private DeleteAddressOperation deleteAddressOperation;
        private SetDefaultAddressOperation setDefaultAddressOperation;
        private UpdateAddressOperation updateAddressOperation;

        public AddressController()
        {
            addAddressOperation = new AddAddressOperation(this);
            deleteAddressOperation = new DeleteAddressOperation(this);
            setDefaultAddressOperation = new SetDefaultAddressOperation(this);
            updateAddressOperation = new UpdateAddressOperation(this);
        }

        [HttpPost("/api/AddAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> AddAddress([FromBody] AddAddressOperationInputDto input)
        {
            return addAddressOperation.Execute(input);
        }

        [HttpDelete("/api/DeleteAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> DeleteAddress([FromBody] AddAddressOperationInputDto input)
        {
            return deleteAddressOperation.Execute(input);
        }

        [HttpPatch("/api/SetDefaultAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> SetDefaultAddress([FromBody] AddAddressOperationInputDto input)
        {
            return setDefaultAddressOperation.Execute(input);
        }

        [HttpPost("/api/UpdateAddress")]
        public Task<OperationOutput<AddAddressOperationOutputDto>> UpdateAddress([FromBody] AddAddressOperationInputDto input)
        {
            return updateAddressOperation.Execute(input);
        }
    }
}
