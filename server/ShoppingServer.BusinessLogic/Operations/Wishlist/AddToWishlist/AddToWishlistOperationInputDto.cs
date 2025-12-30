using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToWishlistOperationInputDto
    {
        public required string ProductId { get; set; }
    }
}
