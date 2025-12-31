using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RemoveFromCartOperationInputDto : OperationInputDto
    {
        public required List<string> ProductIds { get; set; }
    }
}
