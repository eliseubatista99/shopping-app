using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ExecutePurchaseOperationInputDto
    {
        public required List<CheckoutProductDto> Products { get; set; }
    
        public required string AddressId { get; set; }

        public required string PaymentMethodId { get; set; }

        public bool WantsFastShipping { get; set; }
    }
}
