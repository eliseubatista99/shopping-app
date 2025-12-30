using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RemoveFromCartOperationInputDto
    {
        [FromQuery(Name = "productIds")]
        public required List<string> ProductIds { get; set; }
    }
}
