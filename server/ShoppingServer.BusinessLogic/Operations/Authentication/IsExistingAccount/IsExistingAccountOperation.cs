using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Authentication
{
    public class IsExistingAccountOperation : OperationBase<IsExistingAccountOperationInputDto, IsExistingAccountOperationOutputDto>
    {
        public IsExistingAccountOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new IsExistingAccountOperationOutputDto
            {

            };
        }
    }
}
