using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Constants;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetCheckoutInfoOperation : AppOperationBase<GetCheckoutInfoOperationInputDto, GetCheckoutInfoOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IPaymentMethodsRepository paymentMethodsRepository;
        private IAddressesRepository addressesRepository;

        public GetCheckoutInfoOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            paymentMethodsRepository = ExecutionContext.GetService<IPaymentMethodsRepository>();
            addressesRepository = ExecutionContext.GetService<IAddressesRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var addressValidation = await ValidateAddress(input.AddressId);

            if (addressValidation.error != null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(addressValidation.error);
                return;
            }

            var paymentMethodValidation = await ValidatePaymentMethod(input.PaymentMethodId);

            if (paymentMethodValidation.error != null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(paymentMethodValidation.error);
                return;
            }

            var productsValidation = await ValidateProducts(input.ProductIds);

            if (productsValidation.error != null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(productsValidation.error);
                return;
            }

            var userId = this.GetUserIdFromToken();

            var costs = ObjectsFactory.CalculateCheckoutCosts(productsValidation.Data);

            var startDeliveryDate = DateTimeOffset.UtcNow.AddDays(ShoppingServerConstants.DELIVERY_STANDARD_DAYS);
            var fastStartDeliveryDate = DateTimeOffset.UtcNow.AddDays(ShoppingServerConstants.DELIVERY_FAST_SHIPPING_DAYS);

            output.Data = new GetCheckoutInfoOperationOutputDto
            {
                ShippingCost = costs.ShippingCost,
                FastestDeliveryCost = costs.FastestDeliveryCost,
                StartDeliveryDate = startDeliveryDate,
                EndDeliveryDate = startDeliveryDate.AddDays(ShoppingServerConstants.DELIVERY_DAYS_GAP),
                FastestStartDeliveryDate = fastStartDeliveryDate,
                FastestEndDeliveryDate = fastStartDeliveryDate.AddDays(ShoppingServerConstants.DELIVERY_DAYS_FAST_GAP),
            };
        }

        private async Task<(List<CheckoutProductDetailsDto> Data, ErrorDto? error)> ValidateProducts(List<string>? products)
        {

            if (products == null || products.Count < 1)
            {
                return (new List<CheckoutProductDetailsDto>(), new ErrorDto("Products cannot be empty"));
            }

            var productsWithQuantity = CartHelper.GetProductsWithQuantity(input!.ProductIds);

            var productsInDb = await this.productsRepository.GetByIds(productsWithQuantity!.Select(p => p.ProductId));

            var result = productsWithQuantity.Select(p =>
            {
                var productInDb = productsInDb.FirstOrDefault(dbP => dbP.Id == p.ProductId);

                return new CheckoutProductDetailsDto
                {
                    Product = productInDb == null ? null : this.MapperProvider.Map<ProductModel, ProductDto>(productInDb),
                    ProductId = p.ProductId,
                    Quantity = p.Quantity,
                };
            }).ToList();

            return (result, null);
        }

        private async Task<(PaymentMethodModel? Data, ErrorDto? error)> ValidatePaymentMethod(string? paymentMethodId)
        {
            if (paymentMethodId == null)
            {
                return (null, new ErrorDto("Payment method cannot be empty"));
            }

            var paymentMethodInDb = await this.paymentMethodsRepository.GetByIdAsync(paymentMethodId);

            if (paymentMethodInDb == null)
            {
                return (null, new ErrorDto("Invalid payment method"));
            }

            return (paymentMethodInDb, null);
        }

        private async Task<(AddressModel? Data, ErrorDto? error)> ValidateAddress(string? addressId)
        {
            if (addressId == null)
            {
                return (null, new ErrorDto("Address cannot be empty"));
            }

            var addressInDb = await this.addressesRepository.GetByIdAsync(addressId);

            if (addressInDb == null)
            {
                return (null, new ErrorDto("Invalid address"));
            }

            return (addressInDb, null);
        }
    }
}
