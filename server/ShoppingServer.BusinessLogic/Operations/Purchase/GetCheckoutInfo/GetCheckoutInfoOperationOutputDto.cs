using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetCheckoutInfoOperationOutputDto : OperationOutputDto
    {
        public double? ShippingCost { get; set; }

        public double? FastestDeliveryCost { get; set; }

        public DateTimeOffset? StartDeliveryDate { get; set; }

        public DateTimeOffset? EndDeliveryDate { get; set; }

    }
}
