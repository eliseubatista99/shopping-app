using ShoppingServer.BusinessLogic.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class UpdateClientInfoOperationOutputDto
    {
        public ClientInfoDto? UpdatedInfo { get; set; }
    }
}
