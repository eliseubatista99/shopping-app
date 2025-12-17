using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetClientOrdersOperationOutputDto
    {
        public List<OrderDto>? Orders { get; set; }

        public DateTimeOffset? OldestOrderDate { get; set; }

        public bool? HasMorePages { get; set; }
    }
}
