using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SearchProductsOperation : AppOperationBase<SearchProductsOperationInputDto, SearchProductsOperationOutputDto>
    {
        private IProductsRepository productsRepository;

        public SearchProductsOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var searchResult = await productsRepository.Search(
                text: input?.Text,
                score: input?.Score,
                maxPrice: input?.MaxPrice,
                minPrice: input?.MinPrice,
                bestSeller: input?.BestSeller,
                freeShipping: input?.FreeShipping,
                category: input?.Category,
                page: input?.Page,
                pageSize: input?.PageSize);

            var products = this.MapperProvider.Map<List<ProductModel>, List<ProductDto>>(searchResult.Data);

            output.Data = new SearchProductsOperationOutputDto
            {
                Products = products,
                HasMorePages = searchResult.HasMorePages,
            };
        }
    }
}
