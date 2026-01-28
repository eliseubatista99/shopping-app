using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.Library.Operations
{
    [ExcludeFromCodeCoverage]
    public class OperationPaginatedInputDto: OperationInputDto
    {
        public int? Page { get; set; }

        public int? PageSize { get; set; }
    }
}
