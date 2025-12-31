using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SetDefaultAddressOperationInputDto : OperationInputDto
    {
        public required string AddressId { get; set; }
    }
}
