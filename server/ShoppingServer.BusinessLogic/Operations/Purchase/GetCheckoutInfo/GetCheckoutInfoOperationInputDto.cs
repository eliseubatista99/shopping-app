using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetCheckoutInfoOperationInputDto : OperationInputDto
    {
        public required List<string> ProductIds { get; set; }

        public required string AddressId { get; set; }

        public required string PaymentMethodId { get; set; }

    }
}
