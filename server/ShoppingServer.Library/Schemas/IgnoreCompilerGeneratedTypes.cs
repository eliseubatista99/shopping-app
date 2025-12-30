using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace ShoppingServer.Library.Schemas
{
    public class IgnoreCompilerGeneratedTypes : IDocumentFilter
    {
        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            var keysToRemove = swaggerDoc.Components.Schemas
                .Where(kvp => kvp.Key.Contains("<") || kvp.Key.Contains(">"))
                .Select(kvp => kvp.Key)
                .ToList();

            foreach (var key in keysToRemove)
            {
                swaggerDoc.Components.Schemas.Remove(key);
            }
        }
    }
}
