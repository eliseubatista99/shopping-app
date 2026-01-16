namespace ShoppingApp.Database.Models
{
    public class OrderModel
    {
        public required string Id { get; set; }
        public required string UserId { get; set; }
        public required DateTimeOffset CreatedAt { get; set; }
        public required string PaymentMethodId { get; set; }
        public required string AddressId { get; set; }
        public required double ProductCost { get; set; }
        public required double ShippingCost { get; set; }
        public required double TotalCost { get; set; }
        public double? Discounts { get; set; }
        public string? Status { get; set; }
        public DateTimeOffset? StatusDate { get; set; }

    }
}