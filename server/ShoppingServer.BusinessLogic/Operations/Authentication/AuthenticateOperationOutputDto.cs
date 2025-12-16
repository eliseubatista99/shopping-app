using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AuthenticateOperationOutputDto
    {
        public required string Token { get; set; }
    }
}
