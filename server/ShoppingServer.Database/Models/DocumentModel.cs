namespace ShoppingApp.Database.Models
{
    public class DocumentModel
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public string? ProductId { get; set; }

        public string? Content { get; set; }
    }
}
