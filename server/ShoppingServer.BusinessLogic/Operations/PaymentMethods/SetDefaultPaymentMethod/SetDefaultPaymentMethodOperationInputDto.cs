using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SetDefaultPaymentMethodOperationInputDto
    {
        public required string MethodId { get; set; }
    }
}
