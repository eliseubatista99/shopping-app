using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class IsExistingAccountOperationInputDto : OperationInputDto
    {
        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

    }
}
