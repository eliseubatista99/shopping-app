using Azure.Core;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Models;
using ShoppingServer.Helpers;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticateController : ControllerBase
    {
        private ITestsDatabaseProvider testsDatabase;
        public AuthenticateController(ITestsDatabaseProvider testsDatabaseProvider)
        {
            testsDatabase = testsDatabaseProvider;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<TableTestsEntry> Get()
        {
            var tests = testsDatabase.GetAllTests();

            return tests;
        }

        [HttpPost("Authenticate")]
        public IActionResult Authenticate([FromBody] LoginRequest request)
        {
            // Gerar refresh token (exemplo)
            //var refreshToken = tokenService.GenerateRefreshToken();

            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,              
                SameSite = SameSiteMode.Unspecified,
                Path = "/api/RefreshAuthentication",      
                Expires = DateTime.UtcNow.AddDays(1)
            };

            //Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
            Response.Cookies.Append("refreshToken", "example-refresh-token-zau-zau", cookieOptions);

            //var accessToken = tokenService.GenerateAccessToken(request.Email);
            var accessToken = "example-token";

            return Ok(new { accessToken });
        }
    }
}
