
using Microsoft.Extensions.Configuration;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingApp.Database.Helpers
{
    [ExcludeFromCodeCoverage]
    public class ConnectionHelper
    {
        public static string? GetConnectionString(IConfiguration configuration)
        {
            return configuration.GetConnectionString("DefaultConnection");
        }
    }

}
