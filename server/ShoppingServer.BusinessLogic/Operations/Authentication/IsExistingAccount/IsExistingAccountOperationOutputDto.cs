using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class IsExistingAccountOperationOutputDto : OperationOutputDto
    {
        public bool? Exists { get; set; }
    }
}
