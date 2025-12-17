using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToCartOperationInputDto
    {
        public required List<string> ProductIds { get; set; }
    }
}
