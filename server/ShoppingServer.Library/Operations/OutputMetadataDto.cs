using ShoppingServer.Library.Entities;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.Library.Operations
{
    [ExcludeFromCodeCoverage]
    public class OutputMetadataDto
    {
        public bool? Success { get; set; }

        public List<ErrorDto>? Errors { get; set; }

        public void AddErrors(List<ErrorDto> errors)
        {
            this.Success = false;
            this.Errors = errors;
        }
    }
}
