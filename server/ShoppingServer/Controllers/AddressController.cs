using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;

namespace ShoppingServer.Controllers
{
    public class AddAddressResponseDto : OperationOutput<AddAddressOperationOutputDto>;
    public class DeleteAddressResponseDto : OperationOutput<DeleteAddressOperationOutputDto>;
    public class SetDefaultAddressResponseDto : OperationOutput<SetDefaultAddressOperationOutputDto>;
    public class UpdateAddressResponseDto : OperationOutput<UpdateAddressOperationOutputDto>;

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
        public Task<AddAddressResponseDto> AddAddress([FromBody] AddAddressOperationInputDto input)
        {
            return AddAddressResponseDto.AsResponse<AddAddressResponseDto>(addAddressOperation.Execute(input));
        }

        [HttpDelete("/api/DeleteAddress")]
        public Task<DeleteAddressResponseDto> DeleteAddress([FromQuery] DeleteAddressOperationInputDto input)
        {
            return DeleteAddressResponseDto.AsResponse<DeleteAddressResponseDto>(deleteAddressOperation.Execute(input));
        }

        [HttpPatch("/api/SetDefaultAddress")]
        public Task<SetDefaultAddressResponseDto> SetDefaultAddress([FromBody] SetDefaultAddressOperationInputDto input)
        {
            return SetDefaultAddressResponseDto.AsResponse<SetDefaultAddressResponseDto>(setDefaultAddressOperation.Execute(input));
        }

        [HttpPatch("/api/UpdateAddress")]
        public Task<UpdateAddressResponseDto> UpdateAddress([FromBody] UpdateAddressOperationInputDto input)
        {
            return UpdateAddressResponseDto.AsResponse<UpdateAddressResponseDto>(updateAddressOperation.Execute(input));
        }
    }
}
