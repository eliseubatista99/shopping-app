using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateAddressOperation : AppOperationBase<UpdateAddressOperationInputDto, UpdateAddressOperationOutputDto>
    {
        private IAddressesRepository addressesRepository;

        public UpdateAddressOperation(IExecutionContext _context) : base(_context)
        {
            addressesRepository = ExecutionContext.GetService<IAddressesRepository>();
        }

        protected override async Task HandleExecution()
        {
            var userId = GetUserIdFromToken();

            if (input == null || string.IsNullOrEmpty(input.Id))
            {
                output.AddError(new ErrorDto("InvalidAddressId"));
                SetStatusCode(StatusCodes.Status400BadRequest);
                return;
            }

            var addressInDb = await addressesRepository.GetByIdAsync(input.Id);

            if (addressInDb == null)
            {
                output.AddError(new ErrorDto("AddressNotFound"));
                SetStatusCode(StatusCodes.Status404NotFound);
                return;
            }

            addressInDb.Name = input.Name ?? addressInDb.Name;
            addressInDb.PostalCode = input.PostalCode ?? addressInDb.PostalCode;
            addressInDb.City = input.City ?? addressInDb.City;
            addressInDb.Location = input.Location ?? addressInDb.Location;
            addressInDb.Street = input.Street ?? addressInDb.Street;
            addressInDb.Country = input.Country ?? addressInDb.Country;
            addressInDb.Phone = input.Phone ?? addressInDb.Phone;

            var success = await addressesRepository.UpdateAsync(addressInDb);

            if (!success)
            {
                output.AddError(new ErrorDto("ErroUpdatingAddress"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var updatedAddresses = await addressesRepository.GetByUserId(userId);

            output.Data = new UpdateAddressOperationOutputDto
            {
                UpdatedAddresses = MapperProvider.Map<List<AddressModel>, List<AddressDto>>(updatedAddresses),
            };
        }
    }
}
