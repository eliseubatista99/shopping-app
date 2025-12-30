using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SearchProductsOperationOutputDto
    {
        public List<ProductDto>? Products { get; set; }

        public bool? HasMorePages { get; set; }

    }
}
