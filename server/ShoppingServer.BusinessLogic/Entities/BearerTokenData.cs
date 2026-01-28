using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class BearerTokenData
    {
        public required string UserId { get; set; }

        public required string Name { get; set; }

        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

        public string? PhoneNumberPrefix { get; set; }

        public string? Image { get; set; }

        public List<AddressDto>? Addresses { get; set; }

        public List<PaymentMethodDto>? PaymentMethods { get; set; }

    }
}
