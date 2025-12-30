using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class GetPaymentMethodDetailsResponseDto : OperationOutput<GetPaymentMethodDetailsOperationOutputDto>;
    public class AddPaymentMethodResponseDto : OperationOutput<AddPaymentMethodOperationOutputDto>;
    public class DeletePaymentMethodResponseDto : OperationOutput<DeletePaymentMethodOperationOutputDto>;
    public class SetDefaultPaymentMethodResponseDto : OperationOutput<SetDefaultPaymentMethodOperationOutputDto>;
    public class UpdatePaymentMethodResponseDto : OperationOutput<UpdatePaymentMethodOperationOutputDto>;


    [ApiController]
    [Route("[controller]")]
    public class PaymentMethodsController : ControllerBase
    {
        private GetPaymentMethodDetailsOperation getPaymentMethodDetailsOperation;
        private AddPaymentMethodOperation addPaymentMethodOperation;
        private DeletePaymentMethodOperation deletePaymentMethodOperation;
        private SetDefaultPaymentMethodOperation setDefaultPaymentMethodOperation;
        private UpdatePaymentMethodOperation updatePaymentMethodOperation;

        public PaymentMethodsController()
        {
            addPaymentMethodOperation = new AddPaymentMethodOperation(this);
            deletePaymentMethodOperation = new DeletePaymentMethodOperation(this);
            setDefaultPaymentMethodOperation = new SetDefaultPaymentMethodOperation(this);
            updatePaymentMethodOperation = new UpdatePaymentMethodOperation(this);
            getPaymentMethodDetailsOperation = new GetPaymentMethodDetailsOperation(this);
        }

        [HttpGet("/api/GetPaymentMethodDetails")]
        public Task<GetPaymentMethodDetailsResponseDto> GetPaymentMethodDetails([FromQuery] GetPaymentMethodDetailsOperationInputDto input)
        {
            return getPaymentMethodDetailsOperation.Execute<GetPaymentMethodDetailsResponseDto>(input);
        }

        [HttpPost("/api/AddPaymentMethod")]
        public Task<AddPaymentMethodResponseDto> AddPaymentMethod([FromBody] AddPaymentMethodOperationInputDto input)
        {
            return addPaymentMethodOperation.Execute<AddPaymentMethodResponseDto>(input);
        }

        [HttpDelete("/api/DeletePaymentMethod")]
        public Task<DeletePaymentMethodResponseDto> DeletePaymentMethod([FromQuery] DeletePaymentMethodOperationInputDto input)
        {
            return deletePaymentMethodOperation.Execute<DeletePaymentMethodResponseDto>(input);
        }

        [HttpPatch("/api/SetDefaultPaymentMethod")]
        public Task<SetDefaultPaymentMethodResponseDto> SetDefaultPaymentMethod([FromBody] SetDefaultPaymentMethodOperationInputDto input)
        {
            return setDefaultPaymentMethodOperation.Execute<SetDefaultPaymentMethodResponseDto>(input);
        }

        [HttpPatch("/api/UpdatePaymentMethod")]
        public Task<UpdatePaymentMethodResponseDto> UpdatePaymentMethod([FromBody] UpdatePaymentMethodOperationInputDto input)
        {
            return updatePaymentMethodOperation.Execute<UpdatePaymentMethodResponseDto>(input);
        }
    }
}
