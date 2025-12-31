using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class CreateAccountOperationOutputDto : OperationOutputDto
    {
        public required string Token { get; set; }
    }
}
