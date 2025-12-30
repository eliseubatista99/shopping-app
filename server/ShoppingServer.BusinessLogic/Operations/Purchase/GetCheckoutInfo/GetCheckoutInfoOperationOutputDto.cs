using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetCheckoutInfoOperationOutputDto
    {
        public double? ShippingCost { get; set; }

        public double? FastestDeliveryCost { get; set; }

        public DateTimeOffset? StartDeliveryDate { get; set; }

        public DateTimeOffset? EndDeliveryDate { get; set; }

    }
}
