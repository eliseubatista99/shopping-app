using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using ShoppingServer.BusinessLogic.Enums;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace ShoppingServer
{
    public class EnumSchemaFilter : ISchemaFilter
    {
        public void Apply(OpenApiSchema schema, SchemaFilterContext context)
        {
            if (context.Type.IsEnum)
            {
                schema.Type = "string";
                schema.Enum = Enum.GetNames(context.Type)
                                  .Select(n => new OpenApiString(n) as IOpenApiAny)
                                  .ToList();
            }
        }
    }
}
