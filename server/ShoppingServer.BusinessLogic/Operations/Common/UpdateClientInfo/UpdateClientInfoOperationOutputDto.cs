using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateClientInfoOperationOutputDto : OperationOutputDto
    {
        public ClientInfoDto? UpdatedInfo { get; set; }
    }
}
