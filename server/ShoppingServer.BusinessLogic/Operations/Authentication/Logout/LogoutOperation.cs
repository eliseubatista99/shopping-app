using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class LogoutOperation : OperationBase<OperationInputDto, OperationOutputDto>
    {
        private IUsersDatabaseProvider usersDatabaseProvider;
        private ITokensDatabaseProvider tokensDatabaseProvider;
        private IAppTokenProvider appTokenProvider;

        public LogoutOperation(BaseAppController _controller) : base(_controller)
        {
            usersDatabaseProvider = ExecutionContext.GetService<IUsersDatabaseProvider>();
            tokensDatabaseProvider = ExecutionContext.GetService<ITokensDatabaseProvider>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.RefreshToken == null)
            {
                controller.Response.StatusCode = StatusCodes.Status401Unauthorized;
                output.AddError(new ErrorDto("InvalidRefreshToken"));
                return;
            }

            TokenEntry? tokenInDb = tokensDatabaseProvider.GetByToken(input.RefreshToken);
            var now = DateTimeOffset.UtcNow;

            if (tokenInDb == null)
            {
                output.AddError(new ErrorDto("InvalidRefreshToken"));
                SetStatusCode(StatusCodes.Status401Unauthorized);
                return;
            }

            if (tokenInDb!.ExpiresAt < now || tokenInDb!.RevokedAt != null)
            {
                output.AddError(new ErrorDto("ExpiredOrRevokedToken"));
                SetStatusCode(StatusCodes.Status401Unauthorized);
                return;
            }

            UserEntry? userInDb = usersDatabaseProvider.GetUserById(tokenInDb.UserId);

            if (userInDb == null)
            {
                output.AddError(new ErrorDto("InvalidUser"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            tokensDatabaseProvider.DeleteByUserId(refreshToken.UserId);
            tokensDatabaseProvider.Add(refreshToken);

            output.Data = new RefreshAuthenticationOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token
            };
        }
    }
}
