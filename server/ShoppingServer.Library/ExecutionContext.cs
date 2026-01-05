using Microsoft.Extensions.DependencyInjection;

namespace ShoppingServer.Library
{
    public class ExecutionContext : IExecutionContext
    {
        private readonly IServiceProvider _serviceProvider;

        public ExecutionContext(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public T GetService<T>() where T : notnull
        {
            return _serviceProvider.GetRequiredService<T>();
        }
    }
}
