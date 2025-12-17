using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Address
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
