using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetDocumentOperationInputDto
    {
        [FromQuery(Name = "id")]

        public required string Id { get; set; }
    }
}
