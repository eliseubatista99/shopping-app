using AutoMapper;
using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Helpers
{
    public static class ObjectsFactory
    {
        public static async Task<ProductDetailDto> BuildProductDetails(ProductModel source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var imagesRepository = executionContext.GetService<IProductImagesRepository>();
            var productsRepository = executionContext.GetService<IProductsRepository>();
            var relatedProductsRepository = executionContext.GetService<IRelatedProductsRepository>();
            var productCombinationsRepository = executionContext.GetService<IProductCombinationsRepository>();
            var sellersRepository = executionContext.GetService<ISellersRepository>();

            var product = mapperProvider.Map<ProductModel, ProductDetailDto>(source);

            var productImages = await imagesRepository.GetProductImages(source.Id);
            var variations = await productsRepository.GetVariations(source.GroupId);

            var relatedProductIds = await relatedProductsRepository.GetRelatedProducts(source.Id);
            var relatedProducts = await productsRepository.GetByIds(relatedProductIds.Select(i => i.RelatedProductId));

            var productCombinationIds = await productCombinationsRepository.GetProductCombinations(source.Id);
            var productCombinations = await productsRepository.GetByIds(productCombinationIds.Select(i => i.CombinedProductId));

            var seller = await sellersRepository.GetByIdAsync(source.SellerId);


            product.DetailImages = productImages?.Select(i => i.Image?.ToBase64DataUri() ?? string.Empty).ToList();
            product.ProductOptions = mapperProvider.Map<List<ProductModel>, List<ProductOptionDto>>(variations);
            product.RelatedProducts = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(relatedProducts);
            product.ComboProducts = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(productCombinations);
            //product.Specifications = new ProductSpecificationDto
            //{
            //    Brand = source.Brand,
            //    Origin = source.Origin,
            //    Manufacturer = source.Manufacturer,
            //    Height = source.Height,
            //    Width = source.Width,
            //    Depth = source.Depth,
            //    Warranty = source.Warranty,
            //};

            if (seller != null)
            {
                product.Seller = mapperProvider.Map<SellerModel, SellerDto>(seller);
            }
            product.Documents = null;
            product.Reviews = null;
            product.EstimatedDeliveryDate = null;

            return product;
        }

        public static async Task<List<CartProductDetailsDto>> BuildCartProductsDetails(List<CartModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var productsRepository = executionContext.GetService<IProductsRepository>();
            var sellersRepository = executionContext.GetService<ISellersRepository>();

            var cartItems = mapperProvider.Map<List<CartModel>, List<CartProductDetailsDto>>(source);

            var productInDb = await productsRepository.GetByIds(source.Select(i => i.ProductId));
            var products = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(productInDb);

            cartItems.ForEach(c =>
            {
                c.Product = products.FirstOrDefault(p => p.Id == c.ProductId);
            });

            return cartItems;
        }

        public static async Task<List<OrderDto>> BuildOrdersList(List<OrderModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();

            var orderItems = mapperProvider.Map<List<OrderModel>, List<OrderDto>>(source);
            var orderProducts = await GetOrdersProducts(source, executionContext);

            orderItems.ForEach(o =>
            {
                o.Products = orderProducts.FirstOrDefault(op => op.order.Id == o.Id).products;
            });

            return orderItems;
        }

        public static async Task<OrderDetailDto> BuildOrderDetails(OrderModel source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var orderStatusRepository = executionContext.GetService<IOrdersStatusRepository>();
            var paymentMethodsRepository = executionContext.GetService<IPaymentMethodsRepository>();
            var addressesRepository = executionContext.GetService<IAddressesRepository>();

            var orderDetails = mapperProvider.Map<OrderModel, OrderDetailDto>(source);

            var orderProducts = await GetOrdersProducts(new List<OrderModel> { source }, executionContext);

            var orderStatusInDb = await orderStatusRepository.GetByOrderId(source.Id);

            var paymentMethodInDb = await paymentMethodsRepository.GetByIdAsync(source.PaymentMethodId);

            var addressInDb = await addressesRepository.GetByIdAsync(source.AddressId);

            orderDetails.Products = orderProducts.FirstOrDefault(op => op.order.Id == orderDetails.Id).products;

            if (orderStatusInDb != null)
            {
                orderDetails.StatusHistory = mapperProvider.Map<List<OrdersStatusModel>, List<OrderStatusEntryDto>>(orderStatusInDb);
            }

            if (paymentMethodInDb != null)
            {
                orderDetails.PaymentMethod = mapperProvider.Map<PaymentMethodModel, PaymentMethodDto>(paymentMethodInDb);
            }

            if (addressInDb != null)
            {
                orderDetails.Address = mapperProvider.Map<AddressModel, AddressDto>(addressInDb);
            }

            return orderDetails;
        }

        private static async Task<List<(OrderDto order, List<ProductDto> products)>> GetOrdersProducts(List<OrderModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var orderProductsRepository = executionContext.GetService<IOrderProductsRepository>();
            var productsRepository = executionContext.GetService<IProductsRepository>();

            var orderItems = mapperProvider.Map<List<OrderModel>, List<OrderDto>>(source);

            var orderProductsInDb = await orderProductsRepository.GetByOrderIds(source.Select(i => i.Id));
            var productsInDb = await productsRepository.GetByIds(orderProductsInDb.Select(i => i.ProductId));

            List<(OrderDto order, List<ProductDto> products)> result = new List<(OrderDto order, List<ProductDto> products)>();

            orderItems.ForEach(o =>
            {
                var orderProductIds = orderProductsInDb.FindAll(op => op.OrderId == o.Id).Select(p => p.ProductId);
                var productsOfOrder = productsInDb.FindAll(p => orderProductIds.Contains(p.Id));


                result.Add((o, mapperProvider.Map<List<ProductModel>, List<ProductDto>>(productsInDb)));
            });

            return result;
        }
    }
}
