using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ProductOffersOperationOutputDto : OperationOutputDto
    {
        public List<ProductDto>? BuyAgain { get; set; }

        public List<ProductOfferGroupDto>? Groups { get; set; }

        public List<ProductsBannerDto>? Banners { get; set; }
    }
}
