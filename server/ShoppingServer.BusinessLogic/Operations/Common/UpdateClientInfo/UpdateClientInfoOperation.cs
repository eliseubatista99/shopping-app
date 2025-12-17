using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Common
{
    public class UpdateClientInfoOperation : OperationBase<UpdateClientInfoOperationInputDto, UpdateClientInfoOperationOutputDto>
    {
        public UpdateClientInfoOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdateClientInfoOperationOutputDto
            {

            };
        }
    }
}
