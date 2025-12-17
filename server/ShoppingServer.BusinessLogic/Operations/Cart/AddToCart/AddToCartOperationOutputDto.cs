using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToCartOperationOutputDto
    {
        public List<CartProductDto>? Products { get; set; }
    }
}
