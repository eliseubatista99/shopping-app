using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddPaymentMethodOperationInputDto
    {
        public PaymentMethodType Type { get; set; }

        public required string Name { get; set; }

        public string? CardNumber { get; set; }

        public int? ExpirationMonth { get; set; }

        public int? ExpirationYear { get; set; }
    }
}
