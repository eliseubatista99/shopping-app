using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class ExecutePurchaseResponseDto : OperationOutput<VoidDto>;
    public class GetCheckoutInfoResponseDto : OperationOutput<GetCheckoutInfoOperationOutputDto>;

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
        public Task<ExecutePurchaseResponseDto> ExecutePurchase([FromBody] ExecutePurchaseOperationInputDto input)
        {
            return executePurchaseOperation.Execute<ExecutePurchaseResponseDto>(input);
        }

        [HttpGet("/api/GetCheckoutInfo")]
        public Task<GetCheckoutInfoResponseDto> GetCheckoutInfo([FromBody] GetCheckoutInfoOperationInputDto input)
        {
            return getCheckoutInfoOperation.Execute<GetCheckoutInfoResponseDto>(input);
        }
    }
}
