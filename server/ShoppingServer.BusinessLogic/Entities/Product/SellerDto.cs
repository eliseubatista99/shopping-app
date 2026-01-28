using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class SellerDto
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public string? Image { get; set; }

    }
}
