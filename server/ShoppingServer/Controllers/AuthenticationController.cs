using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Authentication;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private AuthenticateOperation authenticateOperation;
        private RefreshAuthenticationOperation refreshAuthenticationOperation;
        private LogoutOperation logoutOperation;

        private ITestsDatabaseProvider testsDatabase;
        public AuthenticationController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
            authenticateOperation = new AuthenticateOperation(this);
            refreshAuthenticationOperation = new RefreshAuthenticationOperation(this);
            logoutOperation = new LogoutOperation(this);
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<TableTestsEntry> Get()
        {
            var tests = testsDatabase.GetAllTests();

            return tests;
        }

        [HttpPost("Authenticate")]
        public Task<OperationOutput<AuthenticateOperationOutputDto>> Authenticate([FromBody] AuthenticateOperationInputDto input)
        {
            return authenticateOperation.Execute(input);
        }

        [HttpPost("RefreshAuthentication")]
        public Task<OperationOutput<RefreshAuthenticationOperationOutputDto>> RefreshAuthentication()
        {
            return refreshAuthenticationOperation.Execute();
        }

        [HttpPost("Logout")]
        public Task<OperationOutput<VoidDto>> Logout()
        {
            return logoutOperation.Execute();
        }
    }
}
