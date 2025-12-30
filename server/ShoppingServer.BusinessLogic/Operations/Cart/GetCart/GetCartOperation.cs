using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetCartOperation : OperationBase<VoidDto, GetCartOperationOutputDto>
    {
        public GetCartOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetCartOperationOutputDto
            {

            };
        }
    }
}
