using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.Controllers
{
    public class GetProductReviewsResponseDto : OperationOutput<GetProductReviewsOperationOutputDto>;
    public class ProductDetailResponseDto : OperationOutput<ProductDetailOperationOutputDto>;
    public class ProductOffersdResponseDto : OperationOutput<ProductOffersOperationOutputDto>;
    public class SearchProductsResponseDto : OperationOutput<SearchProductsOperationOutputDto>;
    public class WriteReviewResponseDto : OperationOutput<VoidDto>;

    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private GetProductReviewsOperation getProductReviewsOperation;
        private ProductDetailOperation productDetailOperation;
        private ProductOffersOperation productOffersOperation;
        private SearchProductsOperation searchProductsOperation;
        private WriteReviewOperation writeReviewOperation;

        public ProductController()
        {
            getProductReviewsOperation = new GetProductReviewsOperation(this);
            productDetailOperation = new ProductDetailOperation(this);
            productOffersOperation = new ProductOffersOperation(this);
            searchProductsOperation = new SearchProductsOperation(this);
            writeReviewOperation = new WriteReviewOperation(this);
        }

        [HttpGet("/api/GetProductReviews")]
        public Task<GetProductReviewsResponseDto> AddPaymentMethod([FromQuery] GetProductReviewsOperationInputDto input)
        {
            return getProductReviewsOperation.Execute<GetProductReviewsResponseDto>(input);
        }

        [HttpGet("/api/ProductDetail")]
        public Task<ProductDetailResponseDto> ProductDetail([FromQuery] ProductDetailOperationInputDto input)
        {
            return productDetailOperation.Execute<ProductDetailResponseDto>(input);
        }

        [HttpGet("/api/ProductOffers")]
        public Task<ProductOffersdResponseDto> ProductOffers()
        {
            return productOffersOperation.Execute<ProductOffersdResponseDto>();
        }

        [HttpGet("/api/SearchProducts")]
        public Task<SearchProductsResponseDto> SearchProducts([FromQuery] SearchProductsOperationInputDto input)
        {
            return searchProductsOperation.Execute<SearchProductsResponseDto>(input);
        }

        [HttpPost("/api/WriteReview")]
        public Task<WriteReviewResponseDto> WriteReview([FromBody] WriteReviewOperationInputDto input)
        {
            return writeReviewOperation.Execute<WriteReviewResponseDto>(input);
        }
    }
}
