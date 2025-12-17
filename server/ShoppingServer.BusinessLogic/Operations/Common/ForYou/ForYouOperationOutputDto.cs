using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ForYouOperationOutputDto
    {
        public List<OrderDto>? Orders { get; set; }

        public List<string>? FavoritesImages { get; set; }

        public int? FavoritesCount { get; set; }

        public string? NeedingReviewProductId { get; set; }

        public string? NeedingReviewProductImage { get; set; }

        public ReviewDto? Review { get; set; }
    }
}
