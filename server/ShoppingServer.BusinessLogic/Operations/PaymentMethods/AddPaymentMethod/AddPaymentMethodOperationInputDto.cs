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

        public string? Network { get; set; }

        public string? Image { get; set; }

        public bool? IsDefault { get; set; }

        public string? SecurityCode { get; set; }

        public int? ExpirationMonth { get; set; }

        public int? ExpirationYear { get; set; }
    }
}
