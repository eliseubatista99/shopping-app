using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetOrderDetailsOperationInputDto
    {
        [FromQuery(Name = "orderId")]

        public required string OrderId { get; set; }
    }
}
