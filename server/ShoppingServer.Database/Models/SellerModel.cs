namespace ShoppingApp.Database.Models
{
    public class SellerModel
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public byte[]? Image { get; set; }

        public required bool IsDbActive { get; set; }
    }
}
