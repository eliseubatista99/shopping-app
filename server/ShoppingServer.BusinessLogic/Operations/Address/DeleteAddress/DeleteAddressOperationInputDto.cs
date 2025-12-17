using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class DeleteAddressOperationInputDto
    {
        public required string AddressId { get; set; }
    }
}
