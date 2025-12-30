using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Linq;
using System.Reflection;

namespace ShoppingServer.BusinessLogic.Attributes
{

    using Microsoft.OpenApi.Any;
    using Microsoft.OpenApi.Models;
    using Swashbuckle.AspNetCore.SwaggerGen;
    using System;
    using System.Linq;
    using System.Reflection;

    public class IncludeAllDtosDocumentFilter : IDocumentFilter
    {
        private readonly Assembly _assembly;

        public IncludeAllDtosDocumentFilter()
        {
            _assembly = Assembly.GetExecutingAssembly();
        }

        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            var types = _assembly.GetTypes()
                .Where(t => t.IsClass && !t.IsAbstract);

            foreach (var type in types)
            {
                // Ignora tipos já registrados
                if (context.SchemaRepository.Schemas.ContainsKey(type.Name))
                    continue;

                // Ignora tipos marcados com ExcludeFromSwagger
                if (type.GetCustomAttribute<ExcludeFromSwagger>() != null)
                    continue;

                // Cria schema do DTO
                var schema = new OpenApiSchema
                {
                    Type = "object",
                    Properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                        .ToDictionary(
                            prop => prop.Name,
                            prop =>
                            {
                                var propType = prop.PropertyType;
                                var propSchema = new OpenApiSchema();

                                if (propType == typeof(string))
                                    propSchema.Type = "string";
                                else if (propType == typeof(int) || propType == typeof(long))
                                    propSchema.Type = "integer";
                                else if (propType == typeof(bool))
                                    propSchema.Type = "boolean";
                                else if (propType.IsEnum)
                                {
                                    propSchema.Type = "string";
                                    propSchema.Enum = Enum.GetNames(propType)
                                                         .Select(n => new OpenApiString(n) as IOpenApiAny)
                                                         .ToList();
                                }
                                else
                                    propSchema.Type = "object";

                                return propSchema;
                            }
                        )
                };

                context.SchemaRepository.Schemas[type.Name] = schema;
            }
        }
    }
}
