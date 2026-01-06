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
            authenticateOperation = new AuthenticateOperation(this);
            refreshAuthenticationOperation = new RefreshAuthenticationOperation(this);
            logoutOperation = new LogoutOperation(this);
            createAccountOperation = new CreateAccountOperation(this);
            isExistingAccountOperation = new IsExistingAccountOperation(this);
        }

        [HttpGet("/api/IsExistingAccount")]
        [Authorize]
        public Task<IsExistingAccountResponseDto> IsExistingAccount([FromQuery] IsExistingAccountOperationInputDto input)
        {
            return isExistingAccountOperation.Execute<IsExistingAccountResponseDto>(input);
        }

        [HttpPost("/api/Authenticate")]
        public Task<AuthenticateResponseDto> Authenticate([FromBody] AuthenticateOperationInputDto input)
        {
            return authenticateOperation.Execute<AuthenticateResponseDto>(input);
        }

        [HttpPost("/api/RefreshAuthentication")]
        public Task<RefreshAuthenticationResponseDto> RefreshAuthentication([FromBody] RefreshAuthenticationOperationInputDto input)
        {
            return refreshAuthenticationOperation.Execute<RefreshAuthenticationResponseDto>(input);
        }

        [HttpPost("/api/CreateAccount")]
        public Task<CreateAccountResponseDto> CreateAccount([FromBody] CreateAccountOperationInputDto input)
        {
            return createAccountOperation.Execute<CreateAccountResponseDto>(input);
        }

        [HttpPost("/api/Logout")]
        public Task<LogoutOperationResponseDto> Logout([FromBody] LogoutOperationInputDto input)
        {
            return logoutOperation.Execute<LogoutOperationResponseDto>(input);
        }


    }
}
