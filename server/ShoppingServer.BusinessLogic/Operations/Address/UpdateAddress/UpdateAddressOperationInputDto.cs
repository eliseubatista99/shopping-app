using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateAddressOperationInputDto
    {
        public required string Id { get; set; }

        public string? Name { get; set; }

        public string? PostalCode { get; set; }

        public string? City { get; set; }

        public string? Location { get; set; }

        public string? Street { get; set; }

        public string? Country { get; set; }

        public string? Phone { get; set; }

        public bool? IsDefault { get; set; }
    }
}
