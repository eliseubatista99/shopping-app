using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ForYouOperation : OperationBase<VoidDto, ForYouOperationOutputDto>
    {
        public ForYouOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new ForYouOperationOutputDto
            {

            };
        }
    }
}
