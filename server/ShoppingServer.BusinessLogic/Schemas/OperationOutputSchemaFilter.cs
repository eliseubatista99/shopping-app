using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.BusinessLogic.Operations;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace ShoppingServer.BusinessLogic.Schemas
{
    public class OperationOutputSchemaFilter : ISchemaFilter
    {
        public void Apply(OpenApiSchema schema, SchemaFilterContext context)
        {
            var type = context.Type;
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(OperationOutput<>))
            {
                var innerType = type.GetGenericArguments()[0];
                schema.Type = "object";
                schema.Properties = innerType.GetProperties()
                    .ToDictionary(
                        prop => prop.Name,
                        prop => context.SchemaGenerator.GenerateSchema(prop.PropertyType, context.SchemaRepository)
                    );
            }
        }
    }
}
