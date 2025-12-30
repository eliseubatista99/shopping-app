using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ProductDetailOperationInputDto
    {
        [FromQuery(Name = "productId")]

        public required string ProductId { get; set; }
    }
}
