using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using ShoppingApp.Database.Models;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AuthenticateOperation: OperationBase<AuthenticateOperationInputDto, AuthenticateOperationOutputDto>
    {
        private readonly PasswordHasher<UserEntry> _passwordHasher;
        private IUsersDatabaseProvider usersDatabaseProvider;

        public AuthenticateOperation(BaseAppController _controller) : base(_controller)
        {
            _passwordHasher = new PasswordHasher<UserEntry>();
            usersDatabaseProvider = ExecutionContext.GetService<IUsersDatabaseProvider>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            UserEntry? userInDb = null;

            if(input.Email != null)
            {
                userInDb = usersDatabaseProvider.GetUserByEmail(input.Email);
            } else if(input.PhoneNumber != null)
            {
                userInDb = usersDatabaseProvider.GetUserByPhoneNumber(input.PhoneNumber);
            } else
            {
                output.AddError(new ErrorDto("MissingEmailOrPhoneNumber"));
                SetStatusCode(StatusCodes.Status400BadRequest);
                return;
            }

            if(userInDb == null)
            {
                output.AddError(new ErrorDto("InvalidUser"));
                SetStatusCode(StatusCodes.Status404NotFound);
                return;
            }

            var result = _passwordHasher.VerifyHashedPassword(userInDb, userInDb.PasswordHash, input.Password);

            if (result != PasswordVerificationResult.Success)
            {
                output.AddError(new ErrorDto("InvalidPassword"));
                SetStatusCode(StatusCodes.Status401Unauthorized);
                return;
            }
                
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
