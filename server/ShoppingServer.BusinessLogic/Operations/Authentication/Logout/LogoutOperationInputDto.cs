using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class LogoutOperationInputDto : OperationInputDto
    {
        public required string RefreshToken { get; set; }

    }
}
