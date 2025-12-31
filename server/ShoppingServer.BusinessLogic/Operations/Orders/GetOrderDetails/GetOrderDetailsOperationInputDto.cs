using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetOrderDetailsOperationInputDto : OperationInputDto
    {
        public required string OrderId { get; set; }
    }
}
