using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Providers;
using ShoppingServer.Library.Attributes;
using ShoppingServer.Library.Schemas;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:3000",
                "https://localhost:3000",
                "http://127.0.0.1:3000",
                "http://client:3000",
                "https://client:3000"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddSingleton<ITestsDatabaseProvider, TestDatabaseProvider>();


builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // Make sure enums are converted to string and not int
        options.JsonSerializerOptions.Converters.Add(
            new JsonStringEnumConverter()
        );
    });

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    // Make sure enums are converted to string and not int
    c.SchemaFilter<EnumSchemaFilter>();

    // Make sure unused dtos are added to swagger, unless they are marked with ExcludeDtoIfUnused attribute 
    c.DocumentFilter<IncludeAllDtosDocumentFilter>();
});

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();

