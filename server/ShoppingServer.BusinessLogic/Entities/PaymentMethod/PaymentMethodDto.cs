using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class PaymentMethodDto
    {
        public required string Id { get; set; }

        public required PaymentMethodType Type { get; set; }

        public required string Name { get; set; }

        public required string Network { get; set; }

        public string? Image { get; set; }

        public string? CardNumberMasked { get; set; }

        public bool? IsDefault { get; set; }

    }
}
