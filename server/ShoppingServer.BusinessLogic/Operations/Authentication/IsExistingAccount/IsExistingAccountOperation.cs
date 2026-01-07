using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class IsExistingAccountOperation : AppOperationBase<IsExistingAccountOperationInputDto, IsExistingAccountOperationOutputDto>
    {
        private IUsersRepository usersRepository;
        private ITokensRepository tokensRepository;
        private IAppTokenProvider appTokenProvider;

        public IsExistingAccountOperation(BaseAppController _controller) : base(_controller)
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
            }

            if (userInDb == null && input?.PhoneNumber != null)
            {
                userInDb = await usersRepository.GetUserByPhoneNumber(input.PhoneNumber);
            }

            output.Data = new IsExistingAccountOperationOutputDto
            {
                Exists = userInDb != null,
            };
        }
    }
}
