using AutoMapper;
using Database.PostgreSql.Extensions;
using Microsoft.EntityFrameworkCore;
using ShoppingServer.BusinessLogic.MapperProfiles;
using ShoppingServer.BusinessLogic.Providers;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Database.Seed;
using ShoppingServer.Library;

namespace ShoppingApp
{
    public class ProgramBuilder : BaseProgramBuilder
    {
        protected override bool UseAuthorization => true;
        protected override bool UseAuthentication => true;

        protected override string[] corsOrigins => [
            "http://localhost:3000",
            "https://localhost:3000",
            "http://127.0.0.1:3000",
            "http://client:3000",
            "https://client:3000",
            "https://eliseubatista99-shopping-app.netlify.app"
        ];

        protected override void InjectDependencies()
        {
            base.InjectDependencies();

            if (Builder != null)
            {
                Builder.Services.AddSingleton<IAppTokenProvider, AppTokenProvider>();

                Builder.Services.AddScoped<IUsersRepository, UsersRepository>();
                Builder.Services.AddScoped<ITokensRepository, TokensRepository>();
                Builder.Services.AddScoped<IAddressesRepository, AddressesRepository>();
                Builder.Services.AddScoped<IPaymentMethodsRepository, PaymentMethodsRepository>();
                Builder.Services.AddScoped<ISellersRepository, SellersRepository>();
                Builder.Services.AddScoped<ICategoriesRepository, CategoriesRepository>();
                Builder.Services.AddScoped<IProductVariantGroupsRepository, ProductVariantGroupsRepository>();
                Builder.Services.AddScoped<IProductsRepository, ProductsRepository>();
                Builder.Services.AddScoped<IProductCategoriesRepository, ProductCategoriesRepository>();
                Builder.Services.AddScoped<IProductImagesRepository, ProductImagesRepository>();
                Builder.Services.AddScoped<IRelatedProductsRepository, RelatedProductsRepository>();
                Builder.Services.AddScoped<IProductCombinationsRepository, ProductCombinationsRepository>();
                Builder.Services.AddScoped<ICartsRepository, CartsRepository>();
                Builder.Services.AddScoped<IOrdersStatusRepository, OrdersStatusRepository>();
                Builder.Services.AddScoped<IOrdersRepository, OrdersRepository>();
                Builder.Services.AddScoped<IOrderProductsRepository, OrderProductsRepository>();
                Builder.Services.AddScoped<IDocumentsRepository, DocumentsRepository>();
                Builder.Services.AddScoped<IReviewsRepository, ReviewsRepository>();
                Builder.Services.AddScoped<IWishlistsRepository, WishlistsRepository>();
                Builder.Services.AddScoped<IBannersRepository, BannersRepository>();

            }
        }

        protected override Profile[] GetMapperProfiles()
        {
            return
            [
                new ModelToDtoProfile(),
                new DtoToModelProfile()
            ];
        }

        protected override void ConfigureDatabase()
        {
            base.ConfigureDatabase();

            if (Builder != null)
            {
                Builder.AddPostgresDbContext<AppDbContext>(enableLogging: true);
            }
        }

        protected override void SeedDatabase()
        {
            base.SeedDatabase();

            using (var scope = App!.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                db.Database.Migrate();

                DatabaseSeeder.Seed(db);
            }
        }

        protected override void ConfigureSwagger()
        {
            base.ConfigureSwagger();
        }

        protected override void ConfigureControllers()
        {
            base.ConfigureControllers();
        }
    }
}
