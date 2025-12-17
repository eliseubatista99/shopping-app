using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Authentication
{
    public class LogoutOperation : OperationBase<VoidDto, VoidDto>
    {
        public LogoutOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            controller.Response.Cookies.Delete("refreshToken", new CookieOptions
            {
                Path = "/RefreshAuthentication",
            });

            output.Data = new VoidDto();
        }
    }
}
