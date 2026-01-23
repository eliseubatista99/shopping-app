using Microsoft.AspNetCore.Http;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ProductDetailOperation : AppOperationBase<ProductDetailOperationInputDto, ProductDetailOperationOutputDto>
    {
        private IProductsRepository productsRepository;

        public ProductDetailOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.ProductId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("ProductId cannot be empty"));
                return;
            }

            var productInDb = await productsRepository.GetByIdAsync(input.ProductId, false);

            if (productInDb == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                output.AddError(new ErrorDto("Product not found"));
                return;
            }

            var product = await ObjectsFactory.BuildProductDetails(productInDb, this.ExecutionContext);

            output.Data = new ProductDetailOperationOutputDto
            {
                Product = product,
            };
        }
    }
}
