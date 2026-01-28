using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ProductDetailDto : ProductDto
    {
        public ProductSpecificationDto? Specifications { get; set; }

        public required SellerDto Seller { get; set; }

        public List<DocumentDto>? Documents { get; set; }

        public List<string>? DetailImages { get; set; }

        public List<ProductOptionDto>? ProductOptions { get; set; }

        public List<ProductDto>? RelatedProducts { get; set; }

        public List<ProductDto>? ComboProducts { get; set; }

        public List<ReviewDto>? Reviews { get; set; }

        public DateTimeOffset? EstimatedDeliveryDate { get; set; }

    }
}
