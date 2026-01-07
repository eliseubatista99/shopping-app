using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetProductReviewsOperation : AppOperationBase<GetProductReviewsOperationInputDto, GetProductReviewsOperationOutputDto>
    {
        public GetProductReviewsOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetProductReviewsOperationOutputDto
            {

            };
        }
    }
}
