using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ProductDetailOperationInputDto : OperationInputDto
    {
        public required string ProductId { get; set; }
    }
}
