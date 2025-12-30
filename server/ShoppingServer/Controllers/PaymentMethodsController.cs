using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
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
        public Task<OperationOutput<GetPaymentMethodDetailsOperationOutputDto>> GetPaymentMethodDetails([FromQuery] GetPaymentMethodDetailsOperationInputDto input)
        {
            return getPaymentMethodDetailsOperation.Execute(input);
        }

        [HttpPost("/api/AddPaymentMethod")]
        public Task<OperationOutput<AddPaymentMethodOperationOutputDto>> AddPaymentMethod([FromBody] AddPaymentMethodOperationInputDto input)
        {
            return addPaymentMethodOperation.Execute(input);
        }

        [HttpDelete("/api/DeletePaymentMethod")]
        public Task<OperationOutput<DeletePaymentMethodOperationOutputDto>> DeletePaymentMethod([FromQuery] DeletePaymentMethodOperationInputDto input)
        {
            return deletePaymentMethodOperation.Execute(input);
        }

        [HttpPatch("/api/SetDefaultPaymentMethod")]
        public Task<OperationOutput<SetDefaultPaymentMethodOperationOutputDto>> SetDefaultPaymentMethod([FromBody] SetDefaultPaymentMethodOperationInputDto input)
        {
            return setDefaultPaymentMethodOperation.Execute(input);
        }

        [HttpPatch("/api/UpdatePaymentMethod")]
        public Task<OperationOutput<UpdatePaymentMethodOperationOutputDto>> UpdatePaymentMethod([FromBody] UpdatePaymentMethodOperationInputDto input)
        {
            return updatePaymentMethodOperation.Execute(input);
        }
    }
}
