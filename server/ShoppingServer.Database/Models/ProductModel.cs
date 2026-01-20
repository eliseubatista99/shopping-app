namespace ShoppingApp.Database.Models
{
    public class ProductModel
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public required byte[] Image { get; set; }

        public required double Price { get; set; }

        public required decimal Score { get; set; }

        public required int ScoreCount { get; set; }

        public required double ShippingCost { get; set; }

        public required bool BestSeller { get; set; }

        public required string SellerId { get; set; }

        public required string GroupId { get; set; }

        public double OriginalPrice { get; set; }

        public bool? IsWishlisted { get; set; }

        public string? Brand { get; set; }

        public string? Model { get; set; }

        public string? Origin { get; set; }

        public string? Manufacturer { get; set; }

        public decimal? Height { get; set; }

        public decimal? Width { get; set; }

        public decimal? Depth { get; set; }

        public int? Warranty { get; set; }

        public DateTimeOffset? CreatedAt { get; set; }
    }
}
