using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private AuthenticateOperation authenticateOperation;
        private RefreshAuthenticationOperation refreshAuthenticationOperation;
        private LogoutOperation logoutOperation;
        private CreateAccountOperation createAccountOperation;

        private ITestsDatabaseProvider testsDatabase;
        public AuthenticationController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
            authenticateOperation = new AuthenticateOperation(this);
            refreshAuthenticationOperation = new RefreshAuthenticationOperation(this);
            logoutOperation = new LogoutOperation(this);
            createAccountOperation = new CreateAccountOperation(this);
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<TableTestsEntry> Get()
        {
            var tests = testsDatabase.GetAllTests();

            return tests;
        }

        [HttpPost("/api/Authenticate")]
        public Task<OperationOutput<AuthenticateOperationOutputDto>> Authenticate([FromBody] AuthenticateOperationInputDto input)
        {
            return authenticateOperation.Execute(input);
        }

        [HttpPost("/api/RefreshAuthentication")]
        public Task<OperationOutput<RefreshAuthenticationOperationOutputDto>> RefreshAuthentication()
        {
            return refreshAuthenticationOperation.Execute();
        }

        [HttpPost("/api/CreateAccount")]
        public Task<OperationOutput<CreateAccountOperationOutputDto>> CreateAccount([FromBody] CreateAccountOperationInputDto input)
        {
            return createAccountOperation.Execute(input);
        }

        [HttpPost("/api/Logout")]
        public Task<OperationOutput<VoidDto>> Logout()
        {
            return logoutOperation.Execute();
        }


    }
}
