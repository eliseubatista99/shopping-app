using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class RefreshAuthenticationOperationOutputDto : OperationOutputDto
    {
        public required string Token { get; set; }
        public required string RefreshToken { get; set; }
    }
}
