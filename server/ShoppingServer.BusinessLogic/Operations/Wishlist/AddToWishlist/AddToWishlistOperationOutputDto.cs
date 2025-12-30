using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToWishlistOperationOutputDto
    {
        public List<ProductDto>? UpdatedWishlist { get; set; }
    }
}
