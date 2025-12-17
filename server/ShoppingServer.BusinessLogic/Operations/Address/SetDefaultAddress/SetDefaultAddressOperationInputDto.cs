using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SetDefaultAddressOperationInputDto
    {
        public required string AddressId { get; set; }
    }
}
