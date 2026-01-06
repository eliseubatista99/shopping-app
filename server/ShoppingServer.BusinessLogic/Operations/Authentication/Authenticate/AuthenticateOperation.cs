using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AuthenticateOperation: OperationBase<AuthenticateOperationInputDto, AuthenticateOperationOutputDto>
    {
        private IUsersDatabaseProvider usersDatabaseProvider;
        private ITokensDatabaseProvider tokensDatabaseProvider;
        private IAppTokenProvider appTokenProvider;

        public AuthenticateOperation(BaseAppController _controller) : base(_controller)
        {
            usersDatabaseProvider = ExecutionContext.GetService<IUsersDatabaseProvider>();
            tokensDatabaseProvider = ExecutionContext.GetService<ITokensDatabaseProvider>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserEntry? userInDb = null;

            if(input?.Email != null)
            {
                userInDb = usersDatabaseProvider.GetUserByEmail(input.Email);
            } else if(input?.PhoneNumber != null)
            {
                userInDb = usersDatabaseProvider.GetUserByPhoneNumber(input.PhoneNumber);
            } else
            {
                output.AddError(new ErrorDto("MissingEmailOrPhoneNumber"));
                SetStatusCode(StatusCodes.Status400BadRequest);
                return;
            }

            if(userInDb == null)
            {
                output.AddError(new ErrorDto("InvalidUser"));
                SetStatusCode(StatusCodes.Status404NotFound);
                return;
            }

            var result = AuthenticationHelper.DecryptPassword(userInDb, userInDb.PasswordHash, input.Password);

            if (result != PasswordVerificationResult.Success)
            {
                output.AddError(new ErrorDto("InvalidPassword"));
                SetStatusCode(StatusCodes.Status401Unauthorized);
                return;
            }

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            tokensDatabaseProvider.DeleteByUserId(refreshToken.UserId);
            tokensDatabaseProvider.Add(refreshToken);

            output.Data = new AuthenticateOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token
            };
        }
    }
}
