namespace ShoppingApp.Database.Models
{
    public class CartModel
    {
        public required string Id { get; set; }

        public required string UserId { get; set; }

        public required string ProductId { get; set; }

        public required string Quantity { get; set; }
    }
}
