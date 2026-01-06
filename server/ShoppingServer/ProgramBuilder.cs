using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Providers;
using ShoppingServer.BusinessLogic.Providers;
using ShoppingServer.BusinessLogic.Providers.AppToken;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;
using System;

namespace ShoppingApp
{
    public class ProgramBuilder : BaseProgramBuilder
    {
        protected new bool UseAuthorization = true;
        protected new bool UseAuthentication = true;

        protected override void InjectDependencies()
        {
            base.InjectDependencies();

            if (Builder != null)
            {
                Builder.Services.AddSingleton<IAppTokenProvider, AppTokenProvider>();

                Builder.Services.AddSingleton<IUsersDatabaseProvider, UsersDatabaseProvider>();
                Builder.Services.AddSingleton<ITokensDatabaseProvider, TokensDatabaseProvider>();
            }
        }

        protected override void ConfigureDatabase()
        {
            base.ConfigureDatabase();

            if (Builder != null)
            {
                Builder.AddPostgresDbContext(enableLogging: true);
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
