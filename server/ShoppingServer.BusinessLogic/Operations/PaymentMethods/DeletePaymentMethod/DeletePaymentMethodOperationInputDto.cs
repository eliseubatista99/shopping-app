using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class DeletePaymentMethodOperationInputDto
    {
        [FromQuery(Name = "methodId")]

        public required string MethodId { get; set; }
    }
}
