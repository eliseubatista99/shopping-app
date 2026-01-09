using AutoMapper;
using Database.PostgreSql.Extensions;
using ShoppingServer.BusinessLogic.MapperProfiles;
using ShoppingServer.BusinessLogic.Providers;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;

namespace ShoppingApp
{
    public class ProgramBuilder : BaseProgramBuilder
    {
        protected override bool UseAuthorization => true;
        protected override bool UseAuthentication => true;


        protected override void InjectDependencies()
        {
            base.InjectDependencies();

            if (Builder != null)
            {
                Builder.Services.AddSingleton<IAppTokenProvider, AppTokenProvider>();

                Builder.Services.AddScoped<ITokensRepository, TokensRepository>();
                Builder.Services.AddScoped<IUsersRepository, UsersRepository>();
                Builder.Services.AddScoped<IAddressesRepository, AddressesRepository>();
                Builder.Services.AddScoped<ISellersRepository, SellersRepository>();
                Builder.Services.AddScoped<IDocumentsRepository, DocumentsRepository>();
                Builder.Services.AddScoped<IProductsRepository, ProductsRepository>();
                Builder.Services.AddScoped<ICartsRepository, CartsRepository>();
            }
        }

        protected override Profile[] GetMapperProfiles()
        {
            return
            [
                new ModelToDtoProfile()
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
