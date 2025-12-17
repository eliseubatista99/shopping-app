using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.BusinessLogic.Operations.Purchase;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PurchaseController : ControllerBase
    {
        private ExecutePurchaseOperation executePurchaseOperation;
        private GetCheckoutInfoOperation getCheckoutInfoOperation;

        public PurchaseController()
        {
            executePurchaseOperation = new ExecutePurchaseOperation(this);
            getCheckoutInfoOperation = new GetCheckoutInfoOperation(this);
        }

        [HttpPost("/api/ExecutePurchase")]
        public Task<OperationOutput<ExecutePurchaseOperationOutputDto>> ExecutePurchase([FromBody] ExecutePurchaseOperationInputDto input)
        {
            return executePurchaseOperation.Execute(input);
        }

        [HttpGet("/api/GetCheckoutInfo")]
        public Task<OperationOutput<GetCheckoutInfoOperationOutputDto>> GetCheckoutInfo([FromBody] GetCheckoutInfoOperationInputDto input)
        {
            return getCheckoutInfoOperation.Execute(input);
        }
    }
}
