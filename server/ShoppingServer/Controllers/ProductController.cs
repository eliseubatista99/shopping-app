using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Product;

namespace ShoppingServer.Controllers
{
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
        public Task<OperationOutput<GetProductReviewsOperationOutputDto>> AddPaymentMethod([FromQuery] GetProductReviewsOperationInputDto input)
        {
            return getProductReviewsOperation.Execute(input);
        }

        [HttpGet("/api/ProductDetail")]
        public Task<OperationOutput<ProductDetailOperationOutputDto>> ProductDetail([FromQuery] ProductDetailOperationInputDto input)
        {
            return productDetailOperation.Execute(input);
        }

        [HttpGet("/api/ProductOffers")]
        public Task<OperationOutput<ProductOffersOperationOutputDto>> ProductOffers()
        {
            return productOffersOperation.Execute(new ProductOffersOperationInputDto());
        }

        [HttpGet("/api/SearchProducts")]
        public Task<OperationOutput<SearchProductsOperationOutputDto>> SearchProducts([FromQuery] SearchProductsOperationInputDto input)
        {
            return searchProductsOperation.Execute(input);
        }

        [HttpPost("/api/WriteReview")]
        public Task<OperationOutput<WriteReviewOperationOutputDto>> WriteReview([FromBody] WriteReviewOperationInputDto input)
        {
            return writeReviewOperation.Execute(input);
        }
    }
}
