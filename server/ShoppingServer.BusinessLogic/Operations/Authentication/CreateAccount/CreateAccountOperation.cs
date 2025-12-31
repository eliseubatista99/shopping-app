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

            //var accessToken = tokenService.GenerateAccessToken(request.Email);
            var accessToken = "example-token";
            var refreshToken = "example-token";

            output.Data = new CreateAccountOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken,

            };
        }
    }
}
