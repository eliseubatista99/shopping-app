using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateAddressOperationOutputDto : OperationOutputDto
    {
        public List<AddressDto>? UpdatedAddresses { get; set; }
    }
}
