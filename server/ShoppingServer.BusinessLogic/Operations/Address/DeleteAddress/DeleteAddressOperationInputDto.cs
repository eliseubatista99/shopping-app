using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Attributes;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [AddToSwaggerEvenIfUnused]
    [ExcludeFromCodeCoverage]
    public class DeleteAddressOperationInputDto
    {
        public required string AddressId { get; set; }
    }
}
