using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetDocumentOperationInputDto
    {
        public required string Id { get; set; }
    }
}
