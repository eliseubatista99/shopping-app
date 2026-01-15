namespace ShoppingApp.Database.Models
{
    public class PaymentMethodModel
    {
        public required string Id { get; set; }

        public required string UserId { get; set; }

        public required string Type { get; set; }

        public required string Name { get; set; }

        public string? Network { get; set; }

        public byte[]? Image { get; set; }

        public string? CardNumber { get; set; }

        public bool? IsDefault { get; set; }

        public string? SecurityCode { get; set; }

        public int? ExpirationMonth { get; set; }

        public int? ExpirationYear { get; set; }
    }
}