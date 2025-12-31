using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SearchProductsOperationInputDto : OperationPaginatedInputDto
    {
        public string? Text { get; set; }
        public decimal? Score { get; set; }
        public double? MaxPrice { get; set; }
        public double? MinPrice { get; set; }
        public bool? BestSeller { get; set; }

        public bool? FreeShipping { get; set; }

        public string? Category { get; set; }

        public SortMode? Sort { get; set; }
    }
}
