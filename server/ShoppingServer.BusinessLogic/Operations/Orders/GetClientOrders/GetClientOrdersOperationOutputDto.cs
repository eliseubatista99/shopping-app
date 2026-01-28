using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetClientOrdersOperationOutputDto : OperationPaginatedOutputDto
    {
        public List<OrderDto>? Orders { get; set; }

        public DateTimeOffset? OldestOrderDate { get; set; }
    }
}
