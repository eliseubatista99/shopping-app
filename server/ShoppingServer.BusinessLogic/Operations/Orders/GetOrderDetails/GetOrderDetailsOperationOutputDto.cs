using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetOrderDetailsOperationOutputDto
    {
        public OrderDetailDto? Order { get; set; }
    }
}
