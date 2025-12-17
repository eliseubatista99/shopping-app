using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.Authentication
{
    public class RefreshAuthenticationOperation : OperationBase<VoidDto, RefreshAuthenticationOperationOutputDto>
    {
        public RefreshAuthenticationOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            // Obtem o refresh token do cookie HttpOnly
            var refreshToken = controller.Request.Cookies["refreshToken"];

            if (refreshToken is null)
            {
                controller.Response.StatusCode = StatusCodes.Status401Unauthorized;
                output.AddError(new ErrorDto("InvalidRefreshToken"));
                return;
            }


            //var newAccessToken = tokenService.Refresh(refreshToken);
            var newAccessToken = "31312dasdadaddas";

            output.Data = new RefreshAuthenticationOperationOutputDto
            {
                Token = newAccessToken,
            };
        }
    }
}
