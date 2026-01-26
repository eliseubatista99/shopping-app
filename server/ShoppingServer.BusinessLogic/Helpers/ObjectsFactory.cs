using AutoMapper;
using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Constants;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Helpers
{
    public static class ObjectsFactory
    {
        public static async Task<List<ProductDto>> BuildProducts(List<ProductModel> source, IExecutionContext executionContext)
        {
            if (source == null || source?.Count < 1)
            {
                return new List<ProductDto>();
            }

            var mapperProvider = executionContext.GetService<IMapper>();
            var wishlistsRepository = executionContext.GetService<IWishlistsRepository>();
            var productCategoriesRepository = executionContext.GetService<IProductCategoriesRepository>();
            var categoriesRepository = executionContext.GetService<ICategoriesRepository>();

            var products = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(source!);

            var wishlistedProducts = await wishlistsRepository.GetByProductIds(products.Select(p => p.Id));
            var productsCategoriesInDb = await productCategoriesRepository.GetByProductsId(products.Select(p => p.Id));

            var categoriesIds = productsCategoriesInDb.SelectMany(pc => pc.categories).Select(c => c.CategoryId).Distinct();
            var categoriesInDb = await categoriesRepository.GetByIds(categoriesIds);

            products.ForEach(p =>
            {
                var wishlistedProduct = wishlistedProducts.FirstOrDefault(wp => wp.ProductId == p.Id);

                // Get the categories ids for the product
                var productCategories = productsCategoriesInDb.FindAll(pc => pc.productId == p.Id).SelectMany(pc => pc.categories);
                var productCategoriesIds = productCategories.Select(c => c.CategoryId).Distinct();

                var mainCategoryId = productCategories.FirstOrDefault(pc => pc.IsMain.GetValueOrDefault())?.CategoryId;
                var categories = categoriesInDb.FindAll(c => productCategoriesIds.Contains(c.Id));

                p.IsWishlisted = wishlistedProduct != null;
                p.Category = categories.Find(c => c.Id == mainCategoryId)?.Name ?? string.Empty;
                p.Categories = categories.Select(c => c.Name).ToList();
            });

            return products;
        }


        public static async Task<ProductDetailDto?> BuildProductDetails(ProductModel? source, IExecutionContext executionContext)
        {
            if (source == null)
            {
                return null;
            }

            var baseProductData = (await BuildProducts(new List<ProductModel> { source }, executionContext)).FirstOrDefault();

            if (baseProductData == null)
            {
                return null;
            }

            var mapperProvider = executionContext.GetService<IMapper>();
            var imagesRepository = executionContext.GetService<IProductImagesRepository>();
            var productsRepository = executionContext.GetService<IProductsRepository>();
            var relatedProductsRepository = executionContext.GetService<IRelatedProductsRepository>();
            var productCombinationsRepository = executionContext.GetService<IProductCombinationsRepository>();
            var sellersRepository = executionContext.GetService<ISellersRepository>();
            var reviewsRepository = executionContext.GetService<IReviewsRepository>();
            var documentsRepository = executionContext.GetService<IDocumentsRepository>();

            var product = mapperProvider.Map<ProductModel, ProductDetailDto>(source);

            var productImages = await imagesRepository.GetProductImages(source.Id);
            var variations = await productsRepository.GetVariations(source.GroupId);

            var relatedProductIds = await relatedProductsRepository.GetRelatedProducts(source.Id);
            var relatedProducts = await productsRepository.GetByIds(relatedProductIds.Select(i => i.RelatedProductId));

            var productCombinationIds = await productCombinationsRepository.GetProductCombinations(source.Id);
            var productCombinations = await productsRepository.GetByIds(productCombinationIds.Select(i => i.CombinedProductId));

            var seller = await sellersRepository.GetByIdAsync(source.SellerId, false);

            var reviews = await reviewsRepository.SearchReviews(productId: source.Id);

            var documents = await documentsRepository.GetByProductId(source.Id);

            product.DetailImages = productImages?.Select(i => i.Image?.ToBase64DataUri() ?? string.Empty).ToList();
            product.ProductOptions = mapperProvider.Map<List<ProductModel>, List<ProductOptionDto>>(variations);
            product.RelatedProducts = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(relatedProducts);
            product.ComboProducts = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(productCombinations);
            product.Reviews = mapperProvider.Map<List<ReviewModel>, List<ReviewDto>>(reviews.Data);
            product.Documents = mapperProvider.Map<List<DocumentModel>, List<DocumentDto>>(documents);
            product.IsWishlisted = baseProductData.IsWishlisted;
            product.Categories = baseProductData.Categories;

            if (seller != null)
            {
                product.Seller = mapperProvider.Map<SellerModel, SellerDto>(seller);
            }
            product.EstimatedDeliveryDate = null;

            return product;
        }

        public static async Task<List<CartProductDetailsDto>> BuildCartProductsDetails(List<CartModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var productsRepository = executionContext.GetService<IProductsRepository>();

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

            var paymentMethodInDb = await paymentMethodsRepository.GetByIdAsync(source.PaymentMethodId, false);

            var addressInDb = await addressesRepository.GetByIdAsync(source.AddressId, false);

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

        public static async Task<List<ReviewDto>> BuildReviews(List<ReviewModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var productsRepository = executionContext.GetService<IProductsRepository>();
            var usersRepository = executionContext.GetService<IUsersRepository>();

            var reviews = mapperProvider.Map<List<ReviewModel>, List<ReviewDto>>(source);

            var producstInDb = await productsRepository.GetByIds(source.Select(s => s.ProductId));
            var reviewersInDb = await usersRepository.GetByIds(source.Select(s => s.ReviewerId));

            reviews.ForEach(r =>
            {
                var productInDb = producstInDb.FirstOrDefault(p => p.Id == r.ProductId);
                var reviewerInDb = reviewersInDb.FirstOrDefault(u => u.Id == r.ReviewerId);

                if (productInDb != null)
                {
                    r.ProductName = productInDb.Name;
                    r.ProductIcon = productInDb.Image.ToBase64DataUri();
                }
                if (reviewerInDb != null)
                {
                    r.ReviewerName = reviewerInDb.Name;
                    r.ReviewerIcon = reviewerInDb.Image.ToBase64DataUri();
                }
            });

            return reviews;
        }

        public static async Task<ReviewDto?> BuildReview(ReviewModel? source, IExecutionContext executionContext)
        {
            if (source == null)
            {
                return null;
            }

            var reviews = await BuildReviews(new List<ReviewModel> { source }, executionContext);

            return reviews.FirstOrDefault();
        }

        public static async Task<ClientInfoDto?> BuildClientInfo(UserModel? source, IExecutionContext executionContext)
        {
            if (source == null)
            {
                return null;
            }

            var mapperProvider = executionContext.GetService<IMapper>();
            var paymentMethodsRepository = executionContext.GetService<IPaymentMethodsRepository>();
            var addressesRepository = executionContext.GetService<IAddressesRepository>();

            var clientInfo = mapperProvider.Map<UserModel, ClientInfoDto>(source);

            var paymentMethodsInDb = await paymentMethodsRepository.GetByUserId(clientInfo.Id);
            var addressesInDb = await addressesRepository.GetByUserId(clientInfo.Id);

            if (paymentMethodsInDb != null)
            {
                clientInfo.PaymentMethods = mapperProvider.Map<List<PaymentMethodModel>, List<PaymentMethodDto>>(paymentMethodsInDb);
            }

            if (addressesInDb != null)
            {
                clientInfo.Addresses = mapperProvider.Map<List<AddressModel>, List<AddressDto>>(addressesInDb);
            }

            return clientInfo;
        }

        private static async Task<List<(OrderDto order, List<CheckoutProductDetailsDto> products)>> GetOrdersProducts(List<OrderModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var orderProductsRepository = executionContext.GetService<IOrderProductsRepository>();
            var productsRepository = executionContext.GetService<IProductsRepository>();
            var sellersRepository = executionContext.GetService<ISellersRepository>();

            var orderItems = mapperProvider.Map<List<OrderModel>, List<OrderDto>>(source);

            var orderProductsInDb = await orderProductsRepository.GetByOrderIds(source.Select(i => i.Id).ToList());
            var productsInDb = await productsRepository.GetByIds(orderProductsInDb.Select(i => i.ProductId));
            var sellersInDb = await sellersRepository.GetByIds(productsInDb.Select(p => p.SellerId), false);

            var result = new List<(OrderDto order, List<CheckoutProductDetailsDto> products)>();

            orderItems.ForEach(o =>
            {
                var orderProducts = mapperProvider.Map<List<OrderProductModel>, List<CheckoutProductDetailsDto>>(orderProductsInDb.FindAll(op => op.OrderId == o.Id));
                var orderProductIds = orderProducts.Select(p => p.ProductId);

                var productsOfOrder = productsInDb.FindAll(p => orderProductIds.Contains(p.Id));

                orderProducts.ForEach(op =>
                {
                    var product = productsOfOrder.FirstOrDefault(p => p.Id == op.ProductId);
                    var seller = sellersInDb.FirstOrDefault(s => s.Id == product?.SellerId);

                    if (product != null)
                    {
                        op.Product = mapperProvider.Map<ProductModel, ProductDto>(product);
                    }

                    if (seller != null)
                    {
                        op.Seller = mapperProvider.Map<SellerModel, SellerDto>(seller);
                    }
                });

                result.Add((o, orderProducts));
            });

            return result;
        }

        public static (double ProductCost, double ShippingCost, double Discounts, double TotalCost, double FastestDeliveryCost) CalculateCheckoutCosts(List<CheckoutProductDetailsDto> products)
        {
            double productsCost = 0;
            double shippingCost = 0;
            double discounts = 0;
            double totalCost = 0;

            products.ForEach(p =>
            {
                var discount = p.Product!.OriginalPrice - p.Product!.Price;

                productsCost += (p.Product!.Price * p.Quantity);
                shippingCost += p.Product!.ShippingCost;
                discounts += (discount * p.Quantity);
            });

            totalCost = productsCost + shippingCost - discounts;


            return (productsCost, shippingCost, discounts, totalCost, ShoppingServerConstants.FAST_DELIVERY_COST);
        }
    }
}
