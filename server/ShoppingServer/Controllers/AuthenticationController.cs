using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class AuthenticateResponseDto : OperationResponseDto<AuthenticateOperationOutputDto>;
    public class RefreshAuthenticationResponseDto : OperationResponseDto<RefreshAuthenticationOperationOutputDto>;
    public class LogoutOperationResponseDto : OperationResponseDto<OperationOutputDto>;
    public class CreateAccountResponseDto : OperationResponseDto<CreateAccountOperationOutputDto>;
    public class IsExistingAccountResponseDto : OperationResponseDto<IsExistingAccountOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : BaseAppController
    {
        private AuthenticateOperation authenticateOperation;
        private RefreshAuthenticationOperation refreshAuthenticationOperation;
        private LogoutOperation logoutOperation;
        private CreateAccountOperation createAccountOperation;
        private IsExistingAccountOperation isExistingAccountOperation;

        public AuthenticationController(IExecutionContext executionContext) : base(executionContext)
        {
            authenticateOperation = new AuthenticateOperation(executionContext);
            refreshAuthenticationOperation = new RefreshAuthenticationOperation(executionContext);
            logoutOperation = new LogoutOperation(executionContext);
            createAccountOperation = new CreateAccountOperation(executionContext);
            isExistingAccountOperation = new IsExistingAccountOperation(executionContext);
        }

        [HttpGet("/api/IsExistingAccount")]
        [Authorize]
        public async Task<IsExistingAccountResponseDto> IsExistingAccount([FromQuery] IsExistingAccountOperationInputDto input)
        {
            var response = await isExistingAccountOperation.Execute<IsExistingAccountResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/Authenticate")]
        public async Task<AuthenticateResponseDto> Authenticate([FromBody] AuthenticateOperationInputDto input)
        {
            var response = await authenticateOperation.Execute<AuthenticateResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/RefreshAuthentication")]
        public async Task<RefreshAuthenticationResponseDto> RefreshAuthentication([FromBody] RefreshAuthenticationOperationInputDto input)
        {
            var response = await refreshAuthenticationOperation.Execute<RefreshAuthenticationResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/CreateAccount")]
        public async Task<CreateAccountResponseDto> CreateAccount([FromBody] CreateAccountOperationInputDto input)
        {
            var response = await createAccountOperation.Execute<CreateAccountResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/Logout")]
        public async Task<LogoutOperationResponseDto> Logout([FromBody] LogoutOperationInputDto input)
        {
            var response = await logoutOperation.Execute<LogoutOperationResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }


    }
}
