using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetClientInfoOperation : AppOperationBase<OperationInputDto, GetClientInfoOperationOutputDto>
    {
        private IUsersRepository usersRepository;
        private ICartsRepository cartsRepository;

        public GetClientInfoOperation(BaseAppController _controller) : base(_controller)
        {
            usersRepository = this.ExecutionContext.GetService<IUsersRepository>();
            cartsRepository = this.ExecutionContext.GetService<ICartsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var cardCount = await cartsRepository.GetCartCount(userId);
            var userInDb = await usersRepository.GetByIdAsync(userId);

            var clientInfo = await ObjectsFactory.BuildClientInfo(userInDb, this.ExecutionContext);

            output.Data = new GetClientInfoOperationOutputDto
            {
                Client = clientInfo,
                ItemsInCart = cardCount,
            };
        }
    }
}