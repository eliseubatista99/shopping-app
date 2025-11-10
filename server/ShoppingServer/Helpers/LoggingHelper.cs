using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.Helpers
{
    [ExcludeFromCodeCoverage]
    public class LoggingHelper
    {
        public static void Debug(string value)
        {
            Console.WriteLine("Shopping App Server > " + value);
        }
    }
}