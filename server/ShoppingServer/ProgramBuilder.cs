using Database.PostgreSql.Extensions;
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

                Builder.Services.AddScoped<IUsersRepository, UsersRepository>();
                Builder.Services.AddScoped<ITokensRepository, TokensRepository>();
            }
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
