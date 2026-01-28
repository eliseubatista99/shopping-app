using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetPaymentMethodDetailsOperation : AppOperationBase<GetPaymentMethodDetailsOperationInputDto, GetPaymentMethodDetailsOperationOutputDto>
    {
        private IPaymentMethodsRepository paymentMethodsRepository;

        public GetPaymentMethodDetailsOperation(IExecutionContext _context) : base(_context)
        {
            paymentMethodsRepository = this.ExecutionContext.GetService<IPaymentMethodsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            if (input?.MethodId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("MethodId cannot be empty"));
                return;
            }

            var result = await paymentMethodsRepository.GetByIdAsync(input.MethodId);

            if (result == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                this.output.AddError(new ErrorDto("Payment method not found"));
                return;
            }

            output.Data = new GetPaymentMethodDetailsOperationOutputDto
            {
                Method = this.MapperProvider.Map<PaymentMethodModel, PaymentMethodDetailsDto>(result),
            };
        }
    }
}
