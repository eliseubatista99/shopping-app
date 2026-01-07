using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class ExecutePurchaseResponseDto : OperationResponseDto<OperationOutputDto>;
    public class GetCheckoutInfoResponseDto : OperationResponseDto<GetCheckoutInfoOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class PurchaseController : BaseAppController
    {
        private ExecutePurchaseOperation executePurchaseOperation;
        private GetCheckoutInfoOperation getCheckoutInfoOperation;

        public PurchaseController(IExecutionContext executionContext) : base(executionContext)
        {
            executePurchaseOperation = new ExecutePurchaseOperation(this);
            getCheckoutInfoOperation = new GetCheckoutInfoOperation(this);
        }

        [HttpPost("/api/ExecutePurchase")]
        [Authorize]
        public Task<ExecutePurchaseResponseDto> ExecutePurchase([FromBody] ExecutePurchaseOperationInputDto input)
        {
            return executePurchaseOperation.Execute<ExecutePurchaseResponseDto>(input);
        }

        [HttpGet("/api/GetCheckoutInfo")]
        [Authorize]
        public Task<GetCheckoutInfoResponseDto> GetCheckoutInfo([FromBody] GetCheckoutInfoOperationInputDto input)
        {
            return getCheckoutInfoOperation.Execute<GetCheckoutInfoResponseDto>(input);
        }
    }
}
