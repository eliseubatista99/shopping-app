using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RemoveFromWishlistOperationInputDto : OperationInputDto
    {
        public required string ProductId { get; set; }
    }
}
