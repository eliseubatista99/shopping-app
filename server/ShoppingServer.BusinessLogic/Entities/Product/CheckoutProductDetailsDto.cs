using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class CheckoutProductDetailsDto : CheckoutProductDto
    {
        public ProductDto? Product { get; set; }

        public SellerDto? Seller { get; set; }

    }
}
