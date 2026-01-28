using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddToCartOperationInputDto : OperationInputDto
    {
        public required List<string> ProductIds { get; set; }
    }
}
