using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Models;
using ShoppingServer.Helpers;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private ITestsDatabaseProvider testsDatabase;
        public TestController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<TableTestsEntry> Get()
        {
            var tests = testsDatabase.GetAllTests();

            return tests;
        }
    }
}
