using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class CartProductDto
    {
        public required string ProductId { get; set; }

        public int? Quantity { get; set; }

        public bool? IsSelected { get; set; }
    }
}
