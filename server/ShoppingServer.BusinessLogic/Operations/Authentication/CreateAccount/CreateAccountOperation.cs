using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class CreateAccountOperation : OperationBase<CreateAccountOperationInputDto, CreateAccountOperationOutputDto>
    {
        private IUsersDatabaseProvider usersDatabaseProvider;

        public CreateAccountOperation(BaseAppController _controller) : base(_controller)
        {
            usersDatabaseProvider = ExecutionContext.GetService<IUsersDatabaseProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserEntry? userInDb = null;

            if (input?.Email != null)
            {
                userInDb = usersDatabaseProvider.GetUserByEmail(input.Email);

                if(userInDb != null)
                {
                    output.AddError(new ErrorDto("EmailInUse"));
                    SetStatusCode(StatusCodes.Status400BadRequest);
                    return;
                }
            }
            
            if (input?.PhoneNumber != null)
            {
                userInDb = usersDatabaseProvider.GetUserByPhoneNumber(input.PhoneNumber);

                if (userInDb != null)
                {
                    output.AddError(new ErrorDto("PhoneInUse"));
                    SetStatusCode(StatusCodes.Status400BadRequest);
                    return;
                }
            }

            if (input?.Password == null)
            {
                output.AddError(new ErrorDto("InvalidPassword"));
                SetStatusCode(StatusCodes.Status400BadRequest);
                return;
            }

            userInDb = new UserEntry
            {
                Id = Guid.NewGuid().ToString(),
                Name = input.Name ?? string.Empty,
                Surname = input.Surname ?? string.Empty,
                Email = input.Email,
                PhoneNumber = input.PhoneNumber,
                PhoneNumberPrefix = string.Empty,
                Image = null,
            };

            userInDb.PasswordHash = AuthenticationHelper.EncryptPassword(userInDb, input.Password);

            var success = usersDatabaseProvider.AddUser(userInDb);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorCreatingUser"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            // Gerar refresh token (exemplo)
            //var refreshToken = tokenService.GenerateRefreshToken();

            //var accessToken = tokenService.GenerateAccessToken(request.Email);
            var accessToken = "example-token";
            var refreshToken = "example-token";

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken,

            };
        }
    }
}
