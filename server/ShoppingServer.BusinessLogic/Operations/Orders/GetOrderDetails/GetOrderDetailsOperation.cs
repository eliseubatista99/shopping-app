using Microsoft.AspNetCore.Http;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetOrderDetailsOperation : AppOperationBase<GetOrderDetailsOperationInputDto, GetOrderDetailsOperationOutputDto>
    {
        private IOrdersRepository ordersRepository;

        public GetOrderDetailsOperation(BaseAppController _controller) : base(_controller)
        {
            ordersRepository = this.ExecutionContext.GetService<IOrdersRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.OrderId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("OrderId cannot be empty"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var result = await ordersRepository.GetByIdAsync(input!.OrderId);

            if (result == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                this.output.AddError(new ErrorDto("Order not found"));
                return;
            }

            var orderDetails = await ObjectsFactory.BuildOrderDetails(result, this.ExecutionContext);

            output.Data = new GetOrderDetailsOperationOutputDto
            {
                Order = orderDetails
            };
        }
    }
}
