using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SearchProductsOperationInputDto
    {
        [FromQuery(Name = "page")]
        public int? Page { get; set; }

        [FromQuery(Name = "pageSize")]
        public int? PageSize { get; set; }

        [FromQuery(Name = "text")]
        public string? Text { get; set; }

        [FromQuery(Name = "score")]
        public decimal? Score { get; set; }

        [FromQuery(Name = "maxPrice")]
        public double? MaxPrice { get; set; }

        [FromQuery(Name = "minPrice")]
        public double? MinPrice { get; set; }

        [FromQuery(Name = "bestSeller")]
        public bool? BestSeller { get; set; }

        [FromQuery(Name = "freeShipping")]
        public bool? FreeShipping { get; set; }

        [FromQuery(Name = "category")]
        public string? Category { get; set; }

        [FromQuery(Name = "sort")]
        public SortMode? Sort { get; set; }
    }
}
