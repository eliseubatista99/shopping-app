using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductOptionDto
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public string? Image { get; set; }

        public required double Price { get; set; }

        public required double OriginalPrice { get; set; }
    }
}
