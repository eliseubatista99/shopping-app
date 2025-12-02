using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ErrorDto
    {
        public string Code { get; set; }

        public string? Message { get; set; }

        public ErrorDto(string code) 
        {
            this.Code = code;
            this.Message = null;
        }

        public ErrorDto(string code, string message)
        {
            this.Code = code;
            this.Message = message;
        }
    }
}
