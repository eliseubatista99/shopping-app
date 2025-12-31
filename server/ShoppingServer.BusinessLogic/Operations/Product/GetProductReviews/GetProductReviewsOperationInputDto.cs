using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetProductReviewsOperationInputDto : OperationPaginatedInputDto
    {

        public string? ProductId { get; set; }


        public string? ReviewId { get; set; }


        public string? AuthorId { get; set; }


        public decimal? FilterByRating { get; set; }


        public SortMode? SortMode { get; set; }
    }
}
