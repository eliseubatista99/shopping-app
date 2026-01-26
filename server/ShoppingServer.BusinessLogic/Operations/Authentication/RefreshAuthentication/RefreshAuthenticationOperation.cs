using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RefreshAuthenticationOperation : AppOperationBase<RefreshAuthenticationOperationInputDto, RefreshAuthenticationOperationOutputDto>
    {
        private IUsersRepository usersRepository;
        private ITokensRepository tokensRepository;
        private IAppTokenProvider appTokenProvider;

        public RefreshAuthenticationOperation(IExecutionContext _context) : base(_context)
        {
            usersRepository = ExecutionContext.GetService<IUsersRepository>();
            tokensRepository = ExecutionContext.GetService<ITokensRepository>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.RefreshToken == null)
            {
                SetStatusCode(StatusCodes.Status401Unauthorized);
                output.AddError(new ErrorDto("InvalidRefreshToken"));
                return;
            }

            TokenModel? tokenInDb = await tokensRepository.GetByToken(input.RefreshToken);
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

            UserModel? userInDb = await usersRepository.GetByIdAsync(tokenInDb.UserId);

            if (userInDb == null)
            {
                output.AddError(new ErrorDto("InvalidUser"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            await tokensRepository.DeleteByUserIdAsync(refreshToken.UserId);
            await tokensRepository.AddAsync(refreshToken);

            output.Data = new RefreshAuthenticationOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token
            };
        }
    }

}
