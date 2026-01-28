namespace ShoppingApp.Database.Models
{
    public class ReviewModel
    {
        public required string Id { get; set; }
        public required string ReviewerId { get; set; }
        public required string ProductId { get; set; }
        public required int Score { get; set; }
        public required string Title { get; set; }
        public required DateTimeOffset CreatedAt { get; set; }
        public string? Comment { get; set; }
    }
}