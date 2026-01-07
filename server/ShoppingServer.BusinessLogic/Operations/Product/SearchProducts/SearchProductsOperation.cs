using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SearchProductsOperation : AppOperationBase<SearchProductsOperationInputDto, SearchProductsOperationOutputDto>
    {
        public SearchProductsOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new SearchProductsOperationOutputDto
            {

            };
        }
    }
}
