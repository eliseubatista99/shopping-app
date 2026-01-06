using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class IsExistingAccountOperation : OperationBase<IsExistingAccountOperationInputDto, IsExistingAccountOperationOutputDto>
    {
        private IUsersRepository usersDatabaseProvider;
        private ITokensRepository tokensDatabaseProvider;
        private IAppTokenProvider appTokenProvider;

        public IsExistingAccountOperation(BaseAppController _controller) : base(_controller)
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
            }

            if (userInDb == null && input?.PhoneNumber != null)
            {
                userInDb = await usersDatabaseProvider.GetUserByPhoneNumber(input.PhoneNumber);
            }

            output.Data = new IsExistingAccountOperationOutputDto
            {
                Exists = userInDb != null,
            };
        }
    }
}
