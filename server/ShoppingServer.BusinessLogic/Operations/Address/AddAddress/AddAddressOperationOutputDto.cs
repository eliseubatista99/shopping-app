using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AddAddressOperationOutputDto
    {
        public List<AddressDto>? UpdatedAddresses { get; set; }
    }
}
