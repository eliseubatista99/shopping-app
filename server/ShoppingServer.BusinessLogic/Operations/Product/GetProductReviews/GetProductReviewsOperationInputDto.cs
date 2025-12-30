using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetProductReviewsOperationInputDto
    {
        [FromQuery(Name = "productId")]

        public string? ProductId { get; set; }

        [FromQuery(Name = "reviewId")]

        public string? ReviewId { get; set; }

        [FromQuery(Name = "authorId")]

        public string? AuthorId { get; set; }

        [FromQuery(Name = "page")]

        public int? Page { get; set; }

        [FromQuery(Name = "pageSize")]

        public int? PageSize { get; set; }

        [FromQuery(Name = "filterByRating")]

        public decimal? FilterByRating { get; set; }

        [FromQuery(Name = "sortMode")]

        public SortMode? SortMode { get; set; }
    }
}
