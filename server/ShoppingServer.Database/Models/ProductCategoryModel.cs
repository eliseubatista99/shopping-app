namespace ShoppingApp.Database.Models
{
    public class ProductCategoryModel
    {
        public required string ProductId { get; set; }
        public required string CategoryId { get; set; }
        public bool? IsMain { get; set; }
    }
}
