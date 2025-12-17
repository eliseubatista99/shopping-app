using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class OrderDto
    {
        public required string Id { get; set; }

        public required List<ProductDetailDto> Products { get; set; }

        public required DateTimeOffset Date { get; set; }

        public required OrderStatusEntryDto CurrentStatus { get; set; }
    }
}
