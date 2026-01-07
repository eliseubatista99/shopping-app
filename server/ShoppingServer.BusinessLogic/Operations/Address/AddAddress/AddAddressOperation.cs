using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddAddressOperation : AppOperationBase<AddAddressOperationInputDto, AddAddressOperationOutputDto>
    {
        private IAddressesRepository addressesRepository;

        public AddAddressOperation(BaseAppController _controller) : base(_controller)
        {
            addressesRepository = ExecutionContext.GetService<IAddressesRepository>();
        }

        protected override async Task HandleExecution()
        {
            var userId = GetUserIdFromToken();

            var address = new AddressModel
            {
                Id = Guid.NewGuid().ToString(),
                UserId = userId,
                Name = input?.Name ?? string.Empty,
                PostalCode = input?.PostalCode ?? string.Empty,
                City = input?.City ?? string.Empty,
                Location = input?.Location ?? string.Empty,
                Street = input?.Street ?? string.Empty,
                Country = input?.Country ?? string.Empty,
                Phone = input?.Phone ?? string.Empty,
                CountryCode = null,
                IsDefault = input?.IsDefault.GetValueOrDefault(),
            };

            var success = await addressesRepository.AddAsync(address);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorCreatingAddress"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var updatedAddresses = await addressesRepository.GetByUserId(userId);

            output.Data = new AddAddressOperationOutputDto
            {
                UpdatedAddresses = MapperProvider.Map<List<AddressModel>, List<AddressDto>>(updatedAddresses),
            };
        }
    }
}