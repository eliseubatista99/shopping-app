using ShoppingServer.Library;
using ShoppingServer.Library.Operations;
using System.IdentityModel.Tokens.Jwt;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AppOperationBase<TInput, TOutput>  : OperationBase<TInput, TOutput> 
        where TInput : OperationInputDto
        where TOutput : OperationOutputDto
    {
        public AppOperationBase(BaseAppController _controller) : base(_controller)
        {
            
        }
    
        protected string GetUserIdFromToken()
        {
            var claims = controller.User;

            return claims.FindFirst(JwtRegisteredClaimNames.Jti)?.Value ?? string.Empty;
        }
    }
}
