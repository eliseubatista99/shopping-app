using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class AuthenticateOperationInputDto
    {
        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

        public string? Password { get; set; }

    }
}
