namespace ShoppingApp.Database.Models
{
    public class BannerModel
    {
        public required string Id { get; set; }
        public required string Title { get; set; }
        public required string Subtitle { get; set; }
        public required string Category { get; set; }
        public required byte[] Image { get; set; }
        public required DateTimeOffset CreatedAt { get; set; }

        public required string TextColor { get; set; }
    }
}
