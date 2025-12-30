using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class CreateAccountOperation : OperationBase<CreateAccountOperationInputDto, CreateAccountOperationOutputDto>
    {
        public CreateAccountOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            // Gerar refresh token (exemplo)
            //var refreshToken = tokenService.GenerateRefreshToken();

            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Unspecified,
                Path = "/RefreshAuthentication",
                Expires = DateTime.UtcNow.AddDays(1)
            };

            //Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            controller.Response.Cookies.Append("refreshToken", "example-refresh-token-zau-zau", cookieOptions);

            //var accessToken = tokenService.GenerateAccessToken(request.Email);
            var accessToken = "example-token";

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken
            };
        }
    }
}
