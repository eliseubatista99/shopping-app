using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetCartOperationOutputDto
    {
        public List<CartProductDetailsDto>? Products { get; set; }
    }
}
