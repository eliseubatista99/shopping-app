using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class DeleteAddressOperation : AppOperationBase<DeleteAddressOperationInputDto, DeleteAddressOperationOutputDto>
    {
        private IAddressesRepository addressesRepository;

        public DeleteAddressOperation(IExecutionContext _context) : base(_context)
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
                output.AddError(new ErrorDto("NoAddressFound"));
                SetStatusCode(StatusCodes.Status404NotFound);
                return;
            }

            if (addressInDb.IsDefault.GetValueOrDefault())
            {
                output.AddError(new ErrorDto("CantDeleteDefaultAddress", "Can't delete default address, set another address as default before deleting"));
                SetStatusCode(StatusCodes.Status405MethodNotAllowed);
                return;
            }

            var success = await addressesRepository.DeleteById(input.AddressId);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorDeletingAddress"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var updatedAddresses = await addressesRepository.GetByUserId(userId);

            output.Data = new DeleteAddressOperationOutputDto
            {
                UpdatedAddresses = MapperProvider.Map<List<AddressModel>, List<AddressDto>>(updatedAddresses),
            };
        }
    }
}
