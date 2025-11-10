using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingServer.Helpers;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private ITestsDatabaseProvider testsDatabase;
        public WeatherForecastController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
        }

        private static readonly string[] Summaries =
        [
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        ];

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            var tests = testsDatabase.GetAllTests();

            LoggingHelper.Debug("Db Test: " + tests.First());
            LoggingHelper.Debug("Db Test Count: " + tests.Count);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
