using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetClientOrdersOperation : AppOperationBase<GetClientOrdersOperationInputDto, GetClientOrdersOperationOutputDto>
    {
        private IOrdersRepository ordersRepository;

        public GetClientOrdersOperation(BaseAppController _controller) : base(_controller)
        {
            ordersRepository = this.ExecutionContext.GetService<IOrdersRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            var result = await ordersRepository.GetByUserId(userId, input?.OrderId, input?.FilterByStatus.ToString(), input?.FilterByStartDate, input?.FilterByEndDate, input?.Page, input?.PageSize);
            var orders = await ObjectsFactory.BuildOrdersList(result.Data, this.ExecutionContext);

            if (input?.SortMode != null)
            {
                orders = SortOrders(input.SortMode ?? SortMode.None, orders);
            }

            output.Data = new GetClientOrdersOperationOutputDto
            {
                Orders = orders,
                OldestOrderDate = GetOldestOrderDate(orders),
                HasMorePages = result.HasMorePages,
            };
        }

        private static DateTimeOffset? GetOldestOrderDate(List<OrderDto> orders)
        {
            var sortedOrders = orders.OrderByDescending(o => o.Date).ToList();

            return sortedOrders.FirstOrDefault()?.Date;
        }

        private static List<OrderDto> SortOrders(SortMode sortMode, List<OrderDto> orders)
        {
            switch (sortMode)
            {
                case SortMode.LowToHighPrice:
                    return orders.OrderBy(p => p.TotalCost).ToList();
                case SortMode.HighToLowPrice:
                    return orders.OrderByDescending(p => p.TotalCost).ToList();
                case SortMode.OldToNew:
                    return orders.OrderBy(p => p.Date).ToList();
                case SortMode.NewToOld:
                    return orders.OrderByDescending(p => p.Date).ToList();
                default:
                    return orders;
            }
        }
    }
}
