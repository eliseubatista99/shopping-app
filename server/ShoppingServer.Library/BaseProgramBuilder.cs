using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ShoppingServer.Library.Schemas;
using System.Text.Json.Serialization;

namespace ShoppingServer.Library
{
    public class BaseProgramBuilder
    {
        protected bool UseAuthorization = false;

        protected string[] corsOrigins = new[] 
        { 
            "http://localhost:3000",
            "https://localhost:3000",
            "http://127.0.0.1:3000",
            "http://client:3000",
            "https://client:3000" 
        };

        protected WebApplicationBuilder? Builder;

        protected WebApplication? App;

        protected virtual void InjectDependencies()
        {
        }

        protected virtual void ConfigureControllers()
        {
            if (Builder != null)
            {
                Builder!.Services.AddControllers()
                .AddJsonOptions(options =>
                {
                    // Enums as string instead of int
                    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                });
            }  
        }

        protected virtual void ConfigureSwagger()
        {
            if (Builder != null)
            {
                Builder!.Services.AddOpenApi();
                Builder!.Services.AddEndpointsApiExplorer();
                Builder!.Services.AddSwaggerGen(c =>
                {
                    c.SchemaFilter<EnumSchemaFilter>();
                    c.DocumentFilter<ForceAllDtosDocumentFilter>();
                    c.EnableAnnotations();
                });
            }   
        }

        public (WebApplicationBuilder builder, WebApplication app) Build(string[] args)
        {
            Builder = WebApplication.CreateBuilder(args);

            // Kestrel uses env vars by default
            Builder.WebHost.ConfigureKestrel(options =>
            {
            });

            // Configuração do CORS
            Builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                        .WithOrigins(corsOrigins)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
            });

            InjectDependencies();

            ConfigureControllers();

            ConfigureSwagger();

            App = Builder.Build();

            // Pipeline de desenvolvimento
            if (App.Environment.IsDevelopment())
            {
                App.MapOpenApi();
                App.UseSwagger();
                App.UseSwaggerUI();
            }

            App.UseHttpsRedirection();
            App.UseCors("CorsPolicy");

            if (UseAuthorization)
            {
                App.UseAuthorization();
            }
            App.MapControllers();

            return (Builder, App);
        }

        public void Run()
        {
            App!.Run();
        }

    }
}
