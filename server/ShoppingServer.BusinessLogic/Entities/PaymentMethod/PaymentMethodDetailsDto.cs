using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class PaymentMethodDetailsDto : PaymentMethodDto
    {
        public string? SecurityCode { get; set; }

        public string? CardNumberUnmasked { get; set; }

        public int? ExpirationMonth { get; set; }

        public int? ExpirationYear { get; set; }
    }
}
