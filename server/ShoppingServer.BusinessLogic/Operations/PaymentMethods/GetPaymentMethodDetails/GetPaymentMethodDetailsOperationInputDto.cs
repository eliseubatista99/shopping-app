using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetPaymentMethodDetailsOperationInputDto
    {
        public required string MethodId { get; set; }
    }
}
