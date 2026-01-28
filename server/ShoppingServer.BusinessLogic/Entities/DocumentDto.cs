using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class DocumentDto
    {
        public required string Id { get; set; }

        public required string Name { get; set; }

        public string? Content { get; set; }

    }
}
