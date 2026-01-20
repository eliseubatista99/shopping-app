namespace ShoppingApp.Database.Models
{
    public class WishlistModel
    {
        public required string ProductId { get; set; }
        public required string UserId { get; set; }
        public required DateTimeOffset CreatedAt { get; set; }

    }
}
