using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Product
{
    public class WriteReviewOperation : OperationBase<WriteReviewOperationInputDto, WriteReviewOperationOutputDto>
    {
        public WriteReviewOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new WriteReviewOperationOutputDto
            {

            };
        }
    }
}
