using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateCartProductOperationOutputDto
    {
        public List<CartProductDto>? Products { get; set; }
    }
}
