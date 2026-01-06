using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingApp.Database.Providers;
using ShoppingServer.BusinessLogic.Providers;
using ShoppingServer.BusinessLogic.Providers.AppToken;
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
        private ITokensDatabaseProvider tokensDatabaseProvider;
        private IAppTokenProvider appTokenProvider;

        public CreateAccountOperation(BaseAppController _controller) : base(_controller)
        {
            usersDatabaseProvider = ExecutionContext.GetService<IUsersDatabaseProvider>();
            tokensDatabaseProvider = ExecutionContext.GetService<ITokensDatabaseProvider>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
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

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            tokensDatabaseProvider.DeleteByUserId(refreshToken.UserId);
            tokensDatabaseProvider.Add(refreshToken);

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token,
            };
        }
    }
}
