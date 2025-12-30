using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ReviewDto
    {
        public required string Id { get; set; }

        public required string ReviewerId { get; set; }

        public required string ReviewerName { get; set; }

        public string? ReviewerIcon { get; set; }

        public required decimal Score { get; set; }

        public required string Title { get; set; }

        public required string Comment { get; set; }

        public required string ProductId { get; set; }

        public required string ProductName { get; set; }

        public string? ProductIcon { get; set; }

    }
}
