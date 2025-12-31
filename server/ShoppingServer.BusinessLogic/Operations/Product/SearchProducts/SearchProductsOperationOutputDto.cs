using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SearchProductsOperationOutputDto : OperationPaginatedOutputDto
    {
        public List<ProductDto>? Products { get; set; }
    }
}
