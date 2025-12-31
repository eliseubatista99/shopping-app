using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Providers;
using ShoppingServer.Library;

namespace ShoppingApp
{
    public class ProgramBuilder : BaseProgramBuilder
    {
        protected new bool UseAuthorization = true;

        protected override void InjectDependencies()
        {
            base.InjectDependencies();

            if (Builder != null)
            {
                Builder.Services.AddSingleton<ITestsDatabaseProvider, TestDatabaseProvider>();
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
