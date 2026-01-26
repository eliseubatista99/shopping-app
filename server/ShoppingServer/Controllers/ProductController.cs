using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class GetProductReviewsResponseDto : OperationResponseDto<GetProductReviewsOperationOutputDto>;
    public class ProductDetailResponseDto : OperationResponseDto<ProductDetailOperationOutputDto>;
    public class ProductOffersdResponseDto : OperationResponseDto<ProductOffersOperationOutputDto>;
    public class SearchProductsResponseDto : OperationResponseDto<SearchProductsOperationOutputDto>;
    public class WriteReviewResponseDto : OperationResponseDto<OperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class ProductController : BaseAppController
    {
        private GetProductReviewsOperation getProductReviewsOperation;
        private ProductDetailOperation productDetailOperation;
        private ProductOffersOperation productOffersOperation;
        private SearchProductsOperation searchProductsOperation;
        private WriteReviewOperation writeReviewOperation;

        public ProductController(IExecutionContext executionContext) : base(executionContext)
        {
            getProductReviewsOperation = new GetProductReviewsOperation(executionContext);
            productDetailOperation = new ProductDetailOperation(executionContext);
            productOffersOperation = new ProductOffersOperation(executionContext);
            searchProductsOperation = new SearchProductsOperation(executionContext);
            writeReviewOperation = new WriteReviewOperation(executionContext);
        }

        [HttpGet("/api/GetProductReviews")]
        public async Task<GetProductReviewsResponseDto> AddPaymentMethod([FromQuery] GetProductReviewsOperationInputDto input)
        {
            var response = await getProductReviewsOperation.Execute<GetProductReviewsResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/ProductDetail")]
        public async Task<ProductDetailResponseDto> ProductDetail([FromQuery] ProductDetailOperationInputDto input)
        {
            var response = await productDetailOperation.Execute<ProductDetailResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/ProductOffers")]
        [AllowAnonymous]
        public async Task<ProductOffersdResponseDto> ProductOffers()
        {
            var response = await productOffersOperation.Execute<ProductOffersdResponseDto>();
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/SearchProducts")]
        public async Task<SearchProductsResponseDto> SearchProducts([FromQuery] SearchProductsOperationInputDto input)
        {
            var response = await searchProductsOperation.Execute<SearchProductsResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/WriteReview")]
        [Authorize]
        public async Task<WriteReviewResponseDto> WriteReview([FromBody] WriteReviewOperationInputDto input)
        {
            var response = await writeReviewOperation.Execute<WriteReviewResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
