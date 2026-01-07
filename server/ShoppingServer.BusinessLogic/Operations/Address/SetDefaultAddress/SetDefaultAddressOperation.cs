using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SetDefaultAddressOperation : AppOperationBase<SetDefaultAddressOperationInputDto, SetDefaultAddressOperationOutputDto>
    {
        private IAddressesRepository addressesRepository;

        public SetDefaultAddressOperation(BaseAppController _controller) : base(_controller)
        {
            addressesRepository = ExecutionContext.GetService<IAddressesRepository>();
        }

        protected override async Task HandleExecution()
        {
            var userId = GetUserIdFromToken();

            if (input == null || string.IsNullOrEmpty(input.AddressId))
            {
                output.AddError(new ErrorDto("InvalidAddressId"));
                SetStatusCode(StatusCodes.Status400BadRequest);
                return;
            }

            var addressInDb = await addressesRepository.GetByIdAsync(input.AddressId);

            if (addressInDb == null)
            {
                output.AddError(new ErrorDto("AddressNotFound"));
                SetStatusCode(StatusCodes.Status404NotFound);
                return;
            }

            var success = await addressesRepository.SetNewDefaultAddress(input.AddressId);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorSettingDefaultAddress"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var updatedAddresses = await addressesRepository.GetByUserId(userId);

            output.Data = new SetDefaultAddressOperationOutputDto
            {
                UpdatedAddresses = MapperProvider.Map<List<AddressModel>, List<AddressDto>>(updatedAddresses),
            };
        }
    }
}
