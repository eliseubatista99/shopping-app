using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class AddPaymentMethodOperation : AppOperationBase<AddPaymentMethodOperationInputDto, AddPaymentMethodOperationOutputDto>
    {
        private IPaymentMethodsRepository paymentMethodsRepository;

        public AddPaymentMethodOperation(BaseAppController _controller) : base(_controller)
        {
            paymentMethodsRepository = this.ExecutionContext.GetService<IPaymentMethodsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.Type == null || input?.Name == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("Not enough data to create a payment method"));
                return;
            }

            var userId = this.GetUserIdFromToken();
            var method = new PaymentMethodModel
            {
                Id = Guid.NewGuid().ToString(),
                UserId = userId,
                Type = input?.Type.ToString() ?? string.Empty,
                Name = input?.Name ?? string.Empty,
                Network = input?.Network,
                //Image = input.Image,
                CardNumber = input?.CardNumber,
                IsDefault = input?.IsDefault,
                SecurityCode = input?.SecurityCode,
                ExpirationMonth = input?.ExpirationMonth,
                ExpirationYear = input?.ExpirationYear,
                IsDbActive = true,
            };

            var result = await paymentMethodsRepository.AddItemAsync(method, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to add payment method"));
                return;
            }

            var methodsInDb = await paymentMethodsRepository.GetByUserId(userId);

            output.Data = new AddPaymentMethodOperationOutputDto
            {
                UpdatedMethods = this.MapperProvider.Map<List<PaymentMethodModel>, List<PaymentMethodDto>>(methodsInDb),
            };
        }
    }
}
