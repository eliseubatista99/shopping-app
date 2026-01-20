using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductsBannerDto
    {
        public required string Id { get; set; }

        public required string Title { get; set; }

        public required string Subtitle { get; set; }

        public required string Category { get; set; }

        public required string Image { get; set; }
    }
}
