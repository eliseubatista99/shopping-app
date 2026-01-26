using Microsoft.AspNetCore.Http;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdateClientInfoOperation : AppOperationBase<UpdateClientInfoOperationInputDto, UpdateClientInfoOperationOutputDto>
    {
        private IUsersRepository usersRepository;

        public UpdateClientInfoOperation(IExecutionContext _context) : base(_context)
        {
            usersRepository = this.ExecutionContext.GetService<IUsersRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var userInDb = await usersRepository.GetByIdAsync(userId);

            if (userInDb == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                output.AddError(new ErrorDto("User not found"));
                return;
            }

            if (!string.IsNullOrEmpty(input?.Name))
            {
                userInDb.Name = input.Name;
            }

            if (!string.IsNullOrEmpty(input?.Phone))
            {
                userInDb.PhoneNumber = input.Phone;
            }

            if (!string.IsNullOrEmpty(input?.Email))
            {
                userInDb.Email = input.Email;
            }

            if (!string.IsNullOrEmpty(input?.Password))
            {
                userInDb.PasswordHash = AuthenticationHelper.EncryptPassword(userInDb, input.Password);
            }

            var success = await usersRepository.UpdateAsync(userInDb);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to update client info"));
                return;
            }

            var clientInfo = await ObjectsFactory.BuildClientInfo(userInDb, this.ExecutionContext);

            output.Data = new UpdateClientInfoOperationOutputDto
            {
                UpdatedInfo = clientInfo,
            };
        }
    }
}