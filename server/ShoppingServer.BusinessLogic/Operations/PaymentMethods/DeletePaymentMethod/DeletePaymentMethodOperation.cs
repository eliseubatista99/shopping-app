using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class DeletePaymentMethodOperation : AppOperationBase<DeletePaymentMethodOperationInputDto, DeletePaymentMethodOperationOutputDto>
    {
        private IPaymentMethodsRepository paymentMethodsRepository;

        public DeletePaymentMethodOperation(IExecutionContext _context) : base(_context)
        {
            paymentMethodsRepository = this.ExecutionContext.GetService<IPaymentMethodsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.MethodId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                this.output.AddError(new ErrorDto("MethodId cannot be empty"));
                return;
            }

            var userId = this.GetUserIdFromToken();
            var result = await paymentMethodsRepository.DeleteById(input.MethodId, true);

            if (!result)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                this.output.AddError(new ErrorDto("Failed to delete payment method"));
                return;
            }

            var methodsInDb = await paymentMethodsRepository.GetByUserId(userId);

            output.Data = new DeletePaymentMethodOperationOutputDto
            {
                UpdatedMethods = this.MapperProvider.Map<List<PaymentMethodModel>, List<PaymentMethodDto>>(methodsInDb),
            };
        }
    }
}
