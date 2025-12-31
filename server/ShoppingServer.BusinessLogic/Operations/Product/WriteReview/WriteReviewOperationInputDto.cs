using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class WriteReviewOperationInputDto : OperationInputDto
    {
        public required string ReviewerId { get; set; }

        public required string ProductId { get; set; }

        public required decimal Score { get; set; }

        public required string Title { get; set; }

        public string? Description { get; set; }
    }
}
