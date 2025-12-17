using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RefreshAuthenticationOperationOutputDto
    {
        public required string Token { get; set; }
    }
}
