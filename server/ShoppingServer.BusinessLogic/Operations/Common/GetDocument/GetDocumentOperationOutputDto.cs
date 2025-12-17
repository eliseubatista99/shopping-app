using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetDocumentOperationOutputDto
    {
        public DocumentDto? Document { get; set; }
    }
}
