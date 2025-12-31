using ShoppingServer.Library.Entities;
using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.Library.Operations
{
    [ExcludeFromCodeCoverage]
    public class OperationPaginatedOutputDto : OperationOutputDto
    {
        public bool? HasMorePages { get; set; }
    }
}
