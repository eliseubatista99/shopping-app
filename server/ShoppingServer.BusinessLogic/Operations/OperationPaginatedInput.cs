using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class OperationPaginatedInput
    {
        public int? Page { get; set; }

        public int? PageSize { get; set; }
    }
}
