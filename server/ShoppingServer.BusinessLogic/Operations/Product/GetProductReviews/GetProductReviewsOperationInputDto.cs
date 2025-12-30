using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetProductReviewsOperationInputDto
    {
        public string? ProductId { get; set; }

        public string? ReviewId { get; set; }

        public string? AuthorId { get; set; }

        public int? Page { get; set; }

        public int? PageSize { get; set; }

        public decimal? FilterByRating { get; set; }

        public SortMode? SortMode { get; set; }
    }
}
