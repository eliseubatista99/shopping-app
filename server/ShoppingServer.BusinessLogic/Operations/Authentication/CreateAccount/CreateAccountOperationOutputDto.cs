using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class CreateAccountOperationOutputDto
    {
        public required string Token { get; set; }
    }
}
