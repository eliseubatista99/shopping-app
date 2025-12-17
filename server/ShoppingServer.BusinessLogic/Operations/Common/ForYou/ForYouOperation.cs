using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Common
{
    public class ForYouOperation : OperationBase<ForYouOperationInputDto, ForYouOperationOutputDto>
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
