using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddAddressOperationInputDto
    {
        public required string Name { get; set; }

        public required string PostalCode { get; set; }

        public required string City { get; set; }

        public required string Location { get; set; }

        public required string Street { get; set; }

        public required string Country { get; set; }

        public required string Phone { get; set; }

        public string? CountryCode { get; set; }

        public bool? IsDefault { get; set; }
    }
}