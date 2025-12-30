using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

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
        public Task<OperationOutput<VoidDto>> ExecutePurchase([FromBody] ExecutePurchaseOperationInputDto input)
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
