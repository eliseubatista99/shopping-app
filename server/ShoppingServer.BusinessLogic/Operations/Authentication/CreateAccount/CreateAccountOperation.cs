using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Authentication;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class CreateAccountOperation : AppOperationBase<CreateAccountOperationInputDto, CreateAccountOperationOutputDto>
    {
        private IUsersRepository usersRepository;
        private ITokensRepository tokensRepository;
        private IAppTokenProvider appTokenProvider;

        public CreateAccountOperation(BaseAppController _controller) : base(_controller)
        {
            usersRepository = ExecutionContext.GetService<IUsersRepository>();
            tokensRepository = ExecutionContext.GetService<ITokensRepository>();
            appTokenProvider = ExecutionContext.GetService<IAppTokenProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserModel? userInDb = null;

            if (input?.Email != null)
            {
                userInDb = await usersRepository.GetByEmail(input.Email);

                if(userInDb != null)
                {
                    output.AddError(new ErrorDto("EmailInUse"));
                    SetStatusCode(StatusCodes.Status400BadRequest);
                    return;
                }
            }
            
            if (input?.PhoneNumber != null)
            {
                userInDb = await usersRepository.GetUserByPhoneNumber(input.PhoneNumber);

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

            userInDb = new UserModel
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

            var success = await usersRepository.AddAsync(userInDb);

            if (!success)
            {
                output.AddError(new ErrorDto("ErrorCreatingUser"));
                SetStatusCode(StatusCodes.Status500InternalServerError);
                return;
            }

            await usersRepository.SaveChangesAsync();

            var accessToken = appTokenProvider.GenerateToken(userInDb);
            var refreshToken = appTokenProvider.GenerateRefreshToken(userInDb);

            await tokensRepository.DeleteByUserIdAsync(refreshToken.UserId);
            await tokensRepository.AddAsync(refreshToken);
            await tokensRepository.SaveChangesAsync();

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken.Token,
            };
        }
    }
}
