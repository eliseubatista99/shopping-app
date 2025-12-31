using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetCartOperationOutputDto : OperationOutputDto
    {
        public List<CartProductDetailsDto>? Products { get; set; }
    }
}
