using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class CreateAccountOperation : OperationBase<CreateAccountOperationInputDto, CreateAccountOperationOutputDto>
    {
        private IUsersRepository usersDatabaseProvider;
        private ITokensRepository tokensDatabaseProvider;
        private IAppTokenProvider appTokenProvider;

        public CreateAccountOperation(BaseAppController _controller) : base(_controller)
        {
            usersDatabaseProvider = ExecutionContext.GetService<IUsersRepository>();
            tokensDatabaseProvider = ExecutionContext.GetService<ITokensRepository>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserEntry? userInDb = null;

            if (input?.Email != null)
            {
                userInDb = await usersDatabaseProvider.GetByEmail(input.Email);

                if(userInDb != null)
                {
                    output.AddError(new ErrorDto("EmailInUse"));
                    SetStatusCode(StatusCodes.Status400BadRequest);
                    return;
                }
            }
            
            if (input?.PhoneNumber != null)
            {
                userInDb = await usersDatabaseProvider.GetUserByPhoneNumber(input.PhoneNumber);

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

            var success = await usersDatabaseProvider.AddAsync(userInDb);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorCreatingUser"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            await usersDatabaseProvider.SaveChangesAsync();

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            await tokensDatabaseProvider.DeleteByUserIdAsync(refreshToken.UserId);
            await tokensDatabaseProvider.AddAsync(refreshToken);
            await tokensDatabaseProvider.SaveChangesAsync();

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token,
            };
        }
    }
}
