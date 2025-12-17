using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Address
{
    public class UpdateAddressOperation : OperationBase<UpdateAddressOperationInputDto, UpdateAddressOperationOutputDto>
    {
        public UpdateAddressOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new UpdateAddressOperationOutputDto
            {

            };
        }
    }
}
