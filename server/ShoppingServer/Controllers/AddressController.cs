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
            addAddressOperation = new AddAddressOperation(executionContext);
            deleteAddressOperation = new DeleteAddressOperation(executionContext);
            setDefaultAddressOperation = new SetDefaultAddressOperation(executionContext);
            updateAddressOperation = new UpdateAddressOperation(executionContext);
        }

        [HttpPost("/api/AddAddress")]
        [SwaggerOperation(OperationId = "AddAddress")]
        [Authorize]
        public async Task<AddAddressResponseDto> AddAddress([FromBody] AddAddressOperationInputDto input)
        {
            var response = await addAddressOperation.Execute<AddAddressResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpDelete("/api/DeleteAddress")]
        [SwaggerOperation(OperationId = "DeleteAddress")]
        [Authorize]
        public async Task<DeleteAddressResponseDto> DeleteAddress([FromQuery] DeleteAddressOperationInputDto input)
        {
            var response = await deleteAddressOperation.Execute<DeleteAddressResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPatch("/api/SetDefaultAddress")]
        [SwaggerOperation(OperationId = "SetDefaultAddress")]
        [Authorize]
        public async Task<SetDefaultAddressResponseDto> SetDefaultAddress([FromQuery] SetDefaultAddressOperationInputDto input)
        {
            var response = await setDefaultAddressOperation.Execute<SetDefaultAddressResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/UpdateAddress")]
        [SwaggerOperation(OperationId = "UpdateAddress")]
        [Authorize]
        public async Task<UpdateAddressResponseDto> UpdateAddress([FromBody] UpdateAddressOperationInputDto input)
        {
            var response = await updateAddressOperation.Execute<UpdateAddressResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
