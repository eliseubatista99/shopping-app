using ShoppingApp.Database.Providers;
using ShoppingServer.Database.Providers.Users;
using ShoppingServer.Library;

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
                Builder.Services.AddSingleton<IUsersDatabaseProvider, UsersDatabaseProvider>();
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
