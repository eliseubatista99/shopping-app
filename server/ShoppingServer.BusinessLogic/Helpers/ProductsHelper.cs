using AutoMapper;
using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Helpers
{
    public static class ProductsHelper
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
    }
}
