using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddPaymentMethodOperationOutputDto
    {
        public List<PaymentMethodDto>? UpdatedMethods { get; set; }
    }
}
