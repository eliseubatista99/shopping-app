using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class RefreshAuthenticationOperation : OperationBase<RefreshAuthenticationOperationInputDto, RefreshAuthenticationOperationOutputDto>
    {
        public RefreshAuthenticationOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input.RefreshToken == null)
            {
                controller.Response.StatusCode = StatusCodes.Status401Unauthorized;
                output.AddError(new ErrorDto("InvalidRefreshToken"));
                return;
            }


            //var newAccessToken = tokenService.Refresh(refreshToken);
            var newAccessToken = "31312dasdadaddas";
            var newRefreshToken = "ddas67das567a";

            output.Data = new RefreshAuthenticationOperationOutputDto
            {
                Token = newAccessToken,
                RefreshToken = newRefreshToken
            };
        }
    }
}
