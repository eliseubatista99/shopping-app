using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetPaymentMethodDetailsOperationOutputDto
    {
        public PaymentMethodDetailsDto? Method { get; set; }
    }
}
