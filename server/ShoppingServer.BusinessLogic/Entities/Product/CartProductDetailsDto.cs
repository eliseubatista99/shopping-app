using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class CartProductDetailsDto : CartProductDto
    {
        public ProductDto? Product { get; set; }
    }
}
