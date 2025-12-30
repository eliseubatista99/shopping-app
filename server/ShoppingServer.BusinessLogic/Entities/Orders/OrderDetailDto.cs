using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class OrderDetailDto : OrderDto
    {
        public required List<OrderStatusEntryDto> StatusHistory { get; set; }

        public required PaymentMethodDto PaymentMethod { get; set; }

        public required AddressDto Address { get; set; }

        public required double ProductCost { get; set; }

        public required double TotalCost { get; set; }

        public double? ShippingCost { get; set; }

        public double? Discounts { get; set; }


    }
}
