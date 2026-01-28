using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class SetDefaultAddressOperationOutputDto : OperationOutputDto
    {
        public List<AddressDto>? UpdatedAddresses { get; set; }
    }
}
