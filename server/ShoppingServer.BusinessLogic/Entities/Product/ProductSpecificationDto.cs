using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductSpecificationDto
    {
        public string? Brand { get; set; }

        public string? Model { get; set; }

        public string? Origin { get; set; }

        public string? Manufacturer { get; set; }

        public decimal? Height { get; set; }

        public decimal? Width { get; set; }

        public decimal? Depth { get; set; }

        public int? Warranty { get; set; }

    }
}
