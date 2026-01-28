using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetOrderDetailsOperationOutputDto : OperationOutputDto
    {
        public OrderDetailDto? Order { get; set; }
    }
}
