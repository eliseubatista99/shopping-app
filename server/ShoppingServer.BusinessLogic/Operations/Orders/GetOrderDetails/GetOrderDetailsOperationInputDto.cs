using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetOrderDetailsOperationInputDto
    {
        public required string OrderId { get; set; }
    }
}
