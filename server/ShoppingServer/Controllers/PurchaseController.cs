using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class ExecutePurchaseResponseDto : OperationResponseDto<ExecutePurchaseOperationOutputDto>;
    public class GetCheckoutInfoResponseDto : OperationResponseDto<GetCheckoutInfoOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class PurchaseController : BaseAppController
    {
        private ExecutePurchaseOperation executePurchaseOperation;
        private GetCheckoutInfoOperation getCheckoutInfoOperation;

        public PurchaseController(IExecutionContext executionContext) : base(executionContext)
        {
            executePurchaseOperation = new ExecutePurchaseOperation(executionContext);
            getCheckoutInfoOperation = new GetCheckoutInfoOperation(executionContext);
        }

        [HttpPost("/api/ExecutePurchase")]
        [Authorize]
        public async Task<ExecutePurchaseResponseDto> ExecutePurchase([FromBody] ExecutePurchaseOperationInputDto input)
        {
            var response = await executePurchaseOperation.Execute<ExecutePurchaseResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/GetCheckoutInfo")]
        [Authorize]
        public async Task<GetCheckoutInfoResponseDto> GetCheckoutInfo([FromQuery] GetCheckoutInfoOperationInputDto input)
        {
            var response = await getCheckoutInfoOperation.Execute<GetCheckoutInfoResponseDto>(input, User);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
