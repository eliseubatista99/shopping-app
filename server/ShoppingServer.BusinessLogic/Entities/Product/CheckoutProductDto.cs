using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class CheckoutProductDto
    {
        public required ProductDto Product { get; set; }

        public required int Quantity { get; set; }
    }
}
