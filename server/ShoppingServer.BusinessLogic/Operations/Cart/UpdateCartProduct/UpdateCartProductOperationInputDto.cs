using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateCartProductOperationInputDto : OperationInputDto
    {
        public required List<CartProductDto> Products { get; set; }
    }
}
