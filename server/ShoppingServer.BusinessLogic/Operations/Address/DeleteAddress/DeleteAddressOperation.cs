using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Attributes;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class DeleteAddressOperation : OperationBase<DeleteAddressOperationInputDto, DeleteAddressOperationOutputDto>
    {
        public DeleteAddressOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new DeleteAddressOperationOutputDto
            {

            };
        }
    }
}
