using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;
using Swashbuckle.AspNetCore.Annotations;

namespace ShoppingServer.Controllers
{
    public class AddAddressResponseDto : OperationResponseDto<AddAddressOperationOutputDto>;
    public class DeleteAddressResponseDto : OperationResponseDto<DeleteAddressOperationOutputDto>;
    public class SetDefaultAddressResponseDto : OperationResponseDto<SetDefaultAddressOperationOutputDto>;
    public class UpdateAddressResponseDto : OperationResponseDto<UpdateAddressOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class AddressController : BaseAppController
    {
        private AddAddressOperation addAddressOperation;
        private DeleteAddressOperation deleteAddressOperation;
        private SetDefaultAddressOperation setDefaultAddressOperation;
        private UpdateAddressOperation updateAddressOperation;

        public AddressController(IExecutionContext executionContext) : base(executionContext)
        {
            addAddressOperation = new AddAddressOperation(this);
            deleteAddressOperation = new DeleteAddressOperation(this);
            setDefaultAddressOperation = new SetDefaultAddressOperation(this);
            updateAddressOperation = new UpdateAddressOperation(this);
        }

        [HttpPost("/api/AddAddress")]
        [SwaggerOperation(OperationId = "AddAddress")]
        [Authorize]
        public Task<AddAddressResponseDto> AddAddress([FromBody] AddAddressOperationInputDto input)
        {
            return addAddressOperation.Execute<AddAddressResponseDto>(input);
        }

        [HttpDelete("/api/DeleteAddress")]
        [SwaggerOperation(OperationId = "DeleteAddress")]
        [Authorize]
        public Task<DeleteAddressResponseDto> DeleteAddress([FromQuery] DeleteAddressOperationInputDto input)
        {
            return deleteAddressOperation.Execute<DeleteAddressResponseDto>(input);
        }

        [HttpPatch("/api/SetDefaultAddress")]
        [SwaggerOperation(OperationId = "SetDefaultAddress")]
        [Authorize]
        public Task<SetDefaultAddressResponseDto> SetDefaultAddress([FromQuery] SetDefaultAddressOperationInputDto input)
        {
            return setDefaultAddressOperation.Execute<SetDefaultAddressResponseDto>(input);
        }

        [HttpPost("/api/UpdateAddress")]
        [SwaggerOperation(OperationId = "UpdateAddress")]
        [Authorize]
        public Task<UpdateAddressResponseDto> UpdateAddress([FromBody] UpdateAddressOperationInputDto input)
        {
            return updateAddressOperation.Execute<UpdateAddressResponseDto>(input);
        }
    }
}
