using ShoppingApp.Database.Contracts;
using ShoppingApp.Database.Providers;
using ShoppingServer.Helpers;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

LoggingHelper.Debug("Connection string: " + connectionString);

//builder.WebHost.UseUrls("http://+:5000");

builder.Services.AddSingleton<ITestsDatabaseProvider, TestDatabaseProvider>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

Console.WriteLine("Connection string: " + connectionString);

