using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SearchProductsOperation : AppOperationBase<SearchProductsOperationInputDto, SearchProductsOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IProductImagesRepository productImagesRepository;

        public SearchProductsOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            productImagesRepository = ExecutionContext.GetService<IProductImagesRepository>();
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

            if (input?.Sort != null)
            {
                products = SortProducts(input.Sort ?? SortMode.None, products);
            }

            output.Data = new SearchProductsOperationOutputDto
            {
                Products = products,
                HasMorePages = searchResult.HasMorePages,
            };
        }

        private static List<ProductDto> SortProducts(SortMode sortMode, List<ProductDto> products)
        {
            switch (sortMode)
            {
                case SortMode.LowToHighScore:
                    return products.OrderBy(p => p.Score).ToList();
                case SortMode.HightToLowScore:
                    return products.OrderByDescending(p => p.Score).ToList();
                case SortMode.LowToHighPrice:
                    return products.OrderBy(p => p.Price).ToList();
                case SortMode.HighToLowPrice:
                    return products.OrderByDescending(p => p.Price).ToList();
                case SortMode.OldToNew:
                    return products.OrderBy(p => p.CreatedAt).ToList();
                case SortMode.NewToOld:
                    return products.OrderByDescending(p => p.CreatedAt).ToList();
                default:
                    return products;
            }
        }
    }
}
