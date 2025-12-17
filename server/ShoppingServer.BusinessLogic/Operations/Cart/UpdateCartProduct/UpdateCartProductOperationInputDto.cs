using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateCartProductOperationInputDto
    {
        public required List<CartProductDto> Products { get; set; }
    }
}
