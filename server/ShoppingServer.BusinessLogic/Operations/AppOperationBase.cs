using ShoppingServer.Library;
using ShoppingServer.Library.Operations;
using System.IdentityModel.Tokens.Jwt;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AppOperationBase<TInput, TOutput> : OperationBase<TInput, TOutput>
        where TInput : OperationInputDto
        where TOutput : OperationOutputDto
    {
        public AppOperationBase(IExecutionContext _context) : base(_context)
        {

        }

        protected string GetUserIdFromToken()
        {
            //var claims = ôperation.User

            return this.User?.FindFirst(JwtRegisteredClaimNames.Jti)?.Value ?? string.Empty;
        }
    }
}
