using ShoppingApp.Database.Contracts;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AuthenticateOperation: OperationBase<AuthenticateOperationInputDto, AuthenticateOperationOutputDto>
    {
        public AuthenticateOperation(BaseAppController _controller) : base(_controller)
        {
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var testDb = ExecutionContext.GetService<ITestsDatabaseProvider>();

            var zau = testDb.GetAllTests();

            Console.WriteLine($"ZAU ZAU {zau.FirstOrDefault()?.ToString()}");

        //    // 1. Validar user/password (ex: DB)
        //    var user = AuthenticateUser(request);

        //    if (user == null)
        //        return Unauthorized();

        //    // 2. Criar claims
        //    var claims = new List<Claim>
        //    {
        //      new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
        //      new Claim(ClaimTypes.Role, user.Role)
        //    };

        //    // 3. Gerar tokens
        //    var accessToken = _tokenService.GenerateAccessToken(claims);
        //    var refreshToken = _tokenService.GenerateRefreshToken();

        //    // 4. Guardar refresh token na DB
        //    SaveRefreshToken(user.Id, refreshToken);

        //    // 5. Retornar
        //    return Ok(new
        //    {
        //        accessToken,
        //        refreshToken
        //    });

            // Gerar refresh token (exemplo)
            //var refreshToken = tokenService.GenerateRefreshToken();
            var refreshToken = "example-refresh-token-zau-zau";

            //var accessToken = tokenService.GenerateAccessToken(request.Email);
            var accessToken = "example-token";

            output.Data = new AuthenticateOperationOutputDto
            {
                Token = accessToken,
                RefreshToken = refreshToken
            };
        }
    }
}
