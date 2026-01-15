using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class UpdatePaymentMethodOperation : AppOperationBase<UpdatePaymentMethodOperationInputDto, UpdatePaymentMethodOperationOutputDto>
    {
        private IPaymentMethodsRepository paymentMethodsRepository;

        public UpdatePaymentMethodOperation(BaseAppController _controller) : base(_controller)
        {
            paymentMethodsRepository = this.ExecutionContext.GetService<IPaymentMethodsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.Id == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("Id cannot be empty"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var methodInDb = await paymentMethodsRepository.GetByIdAsync(input.Id);

            if (methodInDb == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                this.output.AddError(new ErrorDto("Method not found"));
                return;
            }

            methodInDb.Name = input.Name ?? methodInDb.Name;
            methodInDb.CardNumber = input.CardNumber ?? methodInDb.CardNumber;
            methodInDb.ExpirationMonth = input.ExpirationMonth ?? methodInDb.ExpirationMonth;
            methodInDb.ExpirationYear = input.ExpirationYear ?? methodInDb.ExpirationYear;

            var result = await paymentMethodsRepository.UpdateAsync(methodInDb, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to update payment method"));
                return;
            }

            var methodsInDb = await paymentMethodsRepository.GetByUserId(userId);

            output.Data = new UpdatePaymentMethodOperationOutputDto
            {
                UpdatedMethods = this.MapperProvider.Map<List<PaymentMethodModel>, List<PaymentMethodDto>>(methodsInDb),
            };
        }
    }
}
