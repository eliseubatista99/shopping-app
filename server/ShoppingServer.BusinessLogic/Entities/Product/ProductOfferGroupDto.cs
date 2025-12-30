using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductOfferGroupDto
    {
        public required List<ProductDto> Products { get; set; }

        public required string Category { get; set; }
    }
}
