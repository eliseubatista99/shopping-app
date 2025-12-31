using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetDocumentOperationInputDto : OperationInputDto
    {
        public required string Id { get; set; }
    }
}
