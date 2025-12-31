using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddPaymentMethodOperationInputDto : OperationInputDto
    {
        public PaymentMethodType Type { get; set; }

        public required string Name { get; set; }

        public string? CardNumber { get; set; }

        public int? ExpirationMonth { get; set; }

        public int? ExpirationYear { get; set; }
    }
}
