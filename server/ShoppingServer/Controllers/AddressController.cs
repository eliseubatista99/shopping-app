using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;

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

        //[HttpDelete("/api/DeleteAddress")]
        //public Task<OperationOutput<DeleteAddressOperationOutputDto>> DeleteAddress([FromQuery] string addressId)
        //{
        //    return deleteAddressOperation.Execute(new DeleteAddressOperationInputDto { AddressId = addressId });
        //}

        [HttpDelete("/api/DeleteAddress")]
        public Task<OperationOutput<DeleteAddressOperationOutputDto>> DeleteAddress([FromQuery] DeleteAddressOperationInputDto input)
        {
            return deleteAddressOperation.Execute(input);
        }

        [HttpPatch("/api/SetDefaultAddress")]
        public Task<OperationOutput<SetDefaultAddressOperationOutputDto>> SetDefaultAddress([FromBody] SetDefaultAddressOperationInputDto input)
        {
            return setDefaultAddressOperation.Execute(input);
        }

        [HttpPatch("/api/UpdateAddress")]
        public Task<OperationOutput<UpdateAddressOperationOutputDto>> UpdateAddress([FromBody] UpdateAddressOperationInputDto input)
        {
            return updateAddressOperation.Execute(input);
        }
    }
}
