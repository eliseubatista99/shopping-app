using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Product
{
    public class GetProductReviewsOperation : OperationBase<GetProductReviewsOperationInputDto, GetProductReviewsOperationOutputDto>
    {
        public GetProductReviewsOperation(ControllerBase _controller) : base(_controller)
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
