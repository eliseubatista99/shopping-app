using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductDto
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public required string Image { get; set; }

        public required double Price { get; set; }

        public required double OriginalPrice { get; set; }

        public required decimal Score { get; set; }

        public required int ScoreCount { get; set; }

        public required double ShippingCost { get; set; }

        public required bool BestSeller { get; set; }

        public bool? IsWishlisted { get; set; }
    }
}
