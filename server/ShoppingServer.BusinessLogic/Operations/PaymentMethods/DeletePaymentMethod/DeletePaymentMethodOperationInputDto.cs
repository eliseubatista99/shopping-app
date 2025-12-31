using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class DeletePaymentMethodOperationInputDto : OperationInputDto
    {

        public required string MethodId { get; set; }
    }
}
