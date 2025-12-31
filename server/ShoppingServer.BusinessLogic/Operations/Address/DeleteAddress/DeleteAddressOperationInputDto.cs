using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class DeleteAddressOperationInputDto : OperationInputDto
    {
        public required string AddressId { get; set; }
    }
}
