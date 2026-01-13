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
        public static async Task<List<ProductDto>> BuildProduct(List<ProductModel> source, IExecutionContext executionContext)
        {
            var mapperProvider = executionContext.GetService<IMapper>();
            var imagesRepository = executionContext.GetService<IProductImagesRepository>();


            var productImages = await imagesRepository.GetProductsImages(source.Select(i => i.Id));
            var products = mapperProvider.Map<List<ProductModel>, List<ProductDto>>(source);

            //await Parallel.ForEachAsync(products, async (product, token) =>
            //{
            //    var productImage = productImages.Find(i => i.Key == product.Id);
            //    var a = 1;
            //});

            products.ForEach(product =>
            {
                var productImage = productImages.FirstOrDefault(i => i.Key == product.Id);
                product.Image = productImage?.FirstOrDefault()?.Image?.ToBase64DataUri() ?? string.Empty;
            });

            return products;
        }
    }
}
