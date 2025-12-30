using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetClientInfoOperationOutputDto
    {
        public ClientInfoDto? Client { get; set; }

        public int? ItemsInCart { get; set; }

    }
}
