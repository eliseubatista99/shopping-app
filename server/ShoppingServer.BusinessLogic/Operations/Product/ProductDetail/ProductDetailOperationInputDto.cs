using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ProductDetailOperationInputDto
    {
        public required string ProductId { get; set; }
    }
}
