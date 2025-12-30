using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetPaymentMethodDetailsOperationInputDto
    {
        [FromQuery(Name = "methodId")]

        public required string MethodId { get; set; }
    }
}
