using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class SetDefaultPaymentMethodOperation : AppOperationBase<SetDefaultPaymentMethodOperationInputDto, SetDefaultPaymentMethodOperationOutputDto>
    {
        private IPaymentMethodsRepository paymentMethodsRepository;

        public SetDefaultPaymentMethodOperation(IExecutionContext _context) : base(_context)
        {
            paymentMethodsRepository = this.ExecutionContext.GetService<IPaymentMethodsRepository>();
        }
        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.MethodId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("Invalid method id"));
                return;
            }

            var userId = this.GetUserIdFromToken();
            var result = await paymentMethodsRepository.SetDefault(input.MethodId);

            var methodsInDb = await paymentMethodsRepository.GetByUserId(userId);

            output.Data = new SetDefaultPaymentMethodOperationOutputDto
            {
                UpdatedMethods = this.MapperProvider.Map<List<PaymentMethodModel>, List<PaymentMethodDto>>(methodsInDb),
            };
        }
    }
}
