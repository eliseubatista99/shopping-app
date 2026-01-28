using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdatePaymentMethodOperationOutputDto : OperationOutputDto
    {
        public List<PaymentMethodDto>? UpdatedMethods { get; set; }
    }
}
