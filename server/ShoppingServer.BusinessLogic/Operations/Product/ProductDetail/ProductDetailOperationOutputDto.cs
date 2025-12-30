using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ProductDetailOperationOutputDto
    {
        public ProductDetailDto? Product { get; set; }
    }
}
