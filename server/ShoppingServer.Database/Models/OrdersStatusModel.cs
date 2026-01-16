namespace ShoppingApp.Database.Models
{
    public class OrdersStatusModel
    {
        public required string Id { get; set; }

        public required string OrderId { get; set; }

        public required string Status { get; set; }

        public required DateTimeOffset StatusDate { get; set; }
    }
}
