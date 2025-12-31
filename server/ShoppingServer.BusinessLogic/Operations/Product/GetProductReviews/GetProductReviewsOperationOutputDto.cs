using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetProductReviewsOperationOutputDto : OperationPaginatedOutputDto
    {
        public string? ProductName { get; set; }

        public string? ProductId { get; set; }

        public decimal? AverageScore { get; set; }

        public int? ReviewsCount { get; set; }

        public List<ScoreCountDto>? Scores { get; set; }

        public List<ReviewDto>? Reviews { get; set; }
    }
}
