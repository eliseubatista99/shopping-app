using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class GetPaymentMethodDetailsResponseDto : OperationResponseDto<GetPaymentMethodDetailsOperationOutputDto>;
    public class AddPaymentMethodResponseDto : OperationResponseDto<AddPaymentMethodOperationOutputDto>;
    public class DeletePaymentMethodResponseDto : OperationResponseDto<DeletePaymentMethodOperationOutputDto>;
    public class SetDefaultPaymentMethodResponseDto : OperationResponseDto<SetDefaultPaymentMethodOperationOutputDto>;
    public class UpdatePaymentMethodResponseDto : OperationResponseDto<UpdatePaymentMethodOperationOutputDto>;


    [ApiController]
    [Route("[controller]")]
    public class PaymentMethodsController : BaseAppController
    {
        private GetPaymentMethodDetailsOperation getPaymentMethodDetailsOperation;
        private AddPaymentMethodOperation addPaymentMethodOperation;
        private DeletePaymentMethodOperation deletePaymentMethodOperation;
        private SetDefaultPaymentMethodOperation setDefaultPaymentMethodOperation;
        private UpdatePaymentMethodOperation updatePaymentMethodOperation;

        public PaymentMethodsController(IExecutionContext executionContext) : base(executionContext)
        {
            addPaymentMethodOperation = new AddPaymentMethodOperation(executionContext);
            deletePaymentMethodOperation = new DeletePaymentMethodOperation(executionContext);
            setDefaultPaymentMethodOperation = new SetDefaultPaymentMethodOperation(executionContext);
            updatePaymentMethodOperation = new UpdatePaymentMethodOperation(executionContext);
            getPaymentMethodDetailsOperation = new GetPaymentMethodDetailsOperation(executionContext);
        }

        [HttpGet("/api/GetPaymentMethodDetails")]
        [Authorize]
        public async Task<GetPaymentMethodDetailsResponseDto> GetPaymentMethodDetails([FromQuery] GetPaymentMethodDetailsOperationInputDto input)
        {
            var response = await getPaymentMethodDetailsOperation.Execute<GetPaymentMethodDetailsResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPost("/api/AddPaymentMethod")]
        [Authorize]
        public async Task<AddPaymentMethodResponseDto> AddPaymentMethod([FromBody] AddPaymentMethodOperationInputDto input)
        {
            var response = await addPaymentMethodOperation.Execute<AddPaymentMethodResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpDelete("/api/DeletePaymentMethod")]
        [Authorize]
        public async Task<DeletePaymentMethodResponseDto> DeletePaymentMethod([FromQuery] DeletePaymentMethodOperationInputDto input)
        {
            var response = await deletePaymentMethodOperation.Execute<DeletePaymentMethodResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPatch("/api/SetDefaultPaymentMethod")]
        [Authorize]
        public async Task<SetDefaultPaymentMethodResponseDto> SetDefaultPaymentMethod([FromQuery] SetDefaultPaymentMethodOperationInputDto input)
        {
            var response = await setDefaultPaymentMethodOperation.Execute<SetDefaultPaymentMethodResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPatch("/api/UpdatePaymentMethod")]
        [Authorize]
        public async Task<UpdatePaymentMethodResponseDto> UpdatePaymentMethod([FromBody] UpdatePaymentMethodOperationInputDto input)
        {
            var response = await updatePaymentMethodOperation.Execute<UpdatePaymentMethodResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }
    }
}
