using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AuthenticateOperation: AppOperationBase<AuthenticateOperationInputDto, AuthenticateOperationOutputDto>
    {
        private IUsersRepository usersRepository;
        private ITokensRepository tokensRepository;
        private IAppTokenProvider appTokenProvider;

        public AuthenticateOperation(BaseAppController _controller) : base(_controller)
        {
            usersRepository = ExecutionContext.GetService<IUsersRepository>();
            tokensRepository = ExecutionContext.GetService<ITokensRepository>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserModel? userInDb = null;

            if(input?.Email != null)
            {
                userInDb = await usersRepository.GetByEmail(input.Email);
            } else if(input?.PhoneNumber != null)
            {
                userInDb = await usersRepository.GetUserByPhoneNumber(input.PhoneNumber);
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

            await tokensRepository.DeleteByUserIdAsync(refreshToken.UserId);
            await tokensRepository.AddAsync(refreshToken);

            await tokensRepository.SaveChangesAsync();
            await usersRepository.SaveChangesAsync();

            output.Data = new AuthenticateOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token
            };
        }
    }
}
