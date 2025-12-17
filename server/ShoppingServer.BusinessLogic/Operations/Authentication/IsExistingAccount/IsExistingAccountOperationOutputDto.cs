using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class IsExistingAccountOperationOutputDto
    {
        public bool? Exists { get; set; }
    }
}
