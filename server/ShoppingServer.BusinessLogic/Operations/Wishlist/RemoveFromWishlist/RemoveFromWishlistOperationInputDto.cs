using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RemoveFromWishlistOperationInputDto
    {
        public required string ProductId { get; set; }
    }
}
