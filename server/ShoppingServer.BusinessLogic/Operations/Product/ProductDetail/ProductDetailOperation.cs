using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ProductDetailOperation : AppOperationBase<ProductDetailOperationInputDto, ProductDetailOperationOutputDto>
    {
        public ProductDetailOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new ProductDetailOperationOutputDto
            {

            };
        }
    }
}
