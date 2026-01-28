using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToWishlistOperationOutputDto : OperationOutputDto
    {
        public List<ProductDto>? UpdatedWishlist { get; set; }
    }
}
