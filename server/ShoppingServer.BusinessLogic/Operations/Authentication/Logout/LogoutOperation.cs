using Microsoft.AspNetCore.Http;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class LogoutOperation : OperationBase<OperationInputDto, OperationOutputDto>
    {
        public LogoutOperation(BaseAppController _controller) : base(_controller)
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

            output.Data = new OperationOutputDto();
        }
    }
}
