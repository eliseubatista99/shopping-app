using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SetDefaultPaymentMethodOperationInputDto : OperationInputDto
    {
        public required string MethodId { get; set; }
    }
}
