using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ClientInfoDto
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

        public string? PhoneNumberPrefix { get; set; }

        public string? Image { get; set; }

        public List<AddressDto>? Addresses { get; set; }

        public List<PaymentMethodDto>? PaymentMethods { get; set; }

    }
}
