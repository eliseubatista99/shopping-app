using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class DeletePaymentMethodOperationInputDto
    {
        public required string MethodId { get; set; }
    }
}
