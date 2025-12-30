using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using ShoppingServer.Library.Schemas;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Linq;
using System.Text.Json.Nodes;

namespace ShoppingServer.Library.Extensions
{


    public static class SwaggerEnumExtensions
    {
        public static void MapAllEnumsAsString(this SwaggerGenOptions options)
        {
            // procura todos os enums carregados
            var enumTypes = AppDomain.CurrentDomain
                              .GetAssemblies()
                              .SelectMany(a => a.GetTypes())
                              .Where(t => t.IsEnum)
                              .Distinct();

            foreach (var enumType in enumTypes)
            {
                options.MapType(enumType, () => new OpenApiSchema
                {
                    Type = "string",
                    Enum = Enum.GetNames(enumType)
                                  .Select(name => new OpenApiString(name) as IOpenApiAny)
                                  .ToList()
                });
            }
        }

        public static void IgnoreCompilerGeneratedTypes(this SwaggerGenOptions options)
        {
            options.DocumentFilter<IgnoreCompilerGeneratedTypes>();
        }
    }

}
