using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetClientInfoOperationOutputDto : OperationOutputDto
    {
        public ClientInfoDto? Client { get; set; }

        public int? ItemsInCart { get; set; }

    }
}
