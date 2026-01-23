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
    public class ExecutePurchaseOperation : AppOperationBase<ExecutePurchaseOperationInputDto, ExecutePurchaseOperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IOrderProductsRepository orderProductsRepository;
        private IOrdersStatusRepository ordersStatusRepository;
        private IOrdersRepository ordersRepository;
        private IPaymentMethodsRepository paymentMethodsRepository;
        private IAddressesRepository addressesRepository;

        public ExecutePurchaseOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            orderProductsRepository = ExecutionContext.GetService<IOrderProductsRepository>();
            ordersStatusRepository = ExecutionContext.GetService<IOrdersStatusRepository>();
            ordersRepository = ExecutionContext.GetService<IOrdersRepository>();
            paymentMethodsRepository = ExecutionContext.GetService<IPaymentMethodsRepository>();
            addressesRepository = ExecutionContext.GetService<IAddressesRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var addressValidation = await ValidateAddress(input?.AddressId);

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

            var productsValidation = await ValidateProducts(input.Products);

            if (productsValidation.error != null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(productsValidation.error);
                return;
            }

            var userId = this.GetUserIdFromToken();

            var costs = CalculateCosts(productsValidation.Data, input.WantsFastShipping);

            var order = new OrderModel
            {
                Id = Guid.NewGuid().ToString(),
                UserId = userId,
                CreatedAt = DateTimeOffset.UtcNow,
                PaymentMethodId = input.PaymentMethodId,
                AddressId = input.AddressId,
                ProductCost = costs.ProductCost,
                ShippingCost = costs.ShippingCost,
                TotalCost = costs.TotalCost,
                Discounts = costs.Discounts,
                Status = ShoppingServerConstants.ORDER_STATUS_PROCESSING,
                StatusDate = DateTimeOffset.UtcNow,
            };

            var orderStatus = new OrdersStatusModel
            {
                Id = Guid.NewGuid().ToString(),
                OrderId = order.Id,
                Status = order.Status,
                StatusDate = order.StatusDate.GetValueOrDefault(),
            };

            var orderProducts = productsValidation.Data.Select(p => new OrderProductModel
            {
                OrderId = order.Id,
                ProductId = p.ProductId,
                Quantity = p.Quantity,
            }).ToList();

            var success = await ordersRepository.AddAsync(order);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to create order"));
                return;
            }

            success = await orderProductsRepository.AddRangeAsync(orderProducts);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to create order"));
                return;
            }

            success = await ordersStatusRepository.AddAsync(orderStatus);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to create order"));
                return;
            }

            var result = await ObjectsFactory.BuildOrderDetails(order, this.ExecutionContext);

            output.Data = new ExecutePurchaseOperationOutputDto
            {
                Order = result,
            };
        }

        private async Task<(List<CheckoutProductDetailsDto> Data, ErrorDto? error)> ValidateProducts(List<CheckoutProductDto>? products)
        {

            if (products == null || products.Count < 1)
            {
                return (new List<CheckoutProductDetailsDto>(), new ErrorDto("Products cannot be empty"));
            }

            var productsInDb = await this.productsRepository.GetByIds(products!.Select(p => p.ProductId));

            if (productsInDb.Count != products.Count)
            {
                return (new List<CheckoutProductDetailsDto>(), new ErrorDto("Not all products are valid"));
            }

            var result = products.Select(p =>
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

        private (double ProductCost, double ShippingCost, double Discounts, double TotalCost) CalculateCosts(List<CheckoutProductDetailsDto> products, bool wantsFastShipping)
        {
            var costs = ObjectsFactory.CalculateCheckoutCosts(products);

            if (wantsFastShipping)
            {
                costs.ShippingCost += costs.FastestDeliveryCost;
                costs.TotalCost += costs.FastestDeliveryCost;
            }


            return (costs.ProductCost, costs.ShippingCost, costs.Discounts, costs.TotalCost);
        }

    }
}
