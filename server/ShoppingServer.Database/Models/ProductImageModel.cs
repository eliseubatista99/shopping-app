namespace ShoppingApp.Database.Models
{
    public class ProductImageModel
    {
        public required string Id { get; set; }

        public required string ProductId { get; set; }

        public required byte[] Image { get; set; }

        public required int SortOrder { get; set; }
    }
}
