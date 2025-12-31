using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class WriteReviewOperation : OperationBase<WriteReviewOperationInputDto, OperationOutputDto>
    {
        public WriteReviewOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new OperationOutputDto
            {

            };
        }
    }
}
