using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetCartOperation : AppOperationBase<OperationInputDto, GetCartOperationOutputDto>
    {
        private ICartsRepository cartsRepository;

        public GetCartOperation(IExecutionContext _context) : base(_context)
        {
            cartsRepository = this.ExecutionContext.GetService<ICartsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var result = await cartsRepository.GetUserCart(userId);
            var products = await ObjectsFactory.BuildCartProductsDetails(result, this.ExecutionContext);

            output.Data = new GetCartOperationOutputDto
            {
                Products = products,
            };
        }
    }
}
