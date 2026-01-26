using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.Library
{
    [ApiController]
    [Route("[controller]")]
    public class BaseAppController : ControllerBase
    {
        protected IExecutionContext ExecutionContext;

        public BaseAppController(IExecutionContext _executionContext)
        {
            ExecutionContext = _executionContext;
        }

        //protected IExecutionContext GetExecutionContext()
        //{
        //    return ExecutionContext;
        //}
    }
}
