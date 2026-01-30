# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /server
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "ShoppingServer.dll"]



# FOR LOCAL DEV ONLY
# FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
# WORKDIR /server
# COPY . .
# RUN dotnet publish -c Release -o /app

# # Runtime stage
# FROM mcr.microsoft.com/dotnet/aspnet:9.0
# WORKDIR /app

# EXPOSE 5000
# EXPOSE 5001

# COPY --from=build /app .
# COPY ./certificate/ShoppingAppCert.pfx /root/.aspnet/https/ShoppingAppCert.pfx

# ENTRYPOINT ["dotnet", "ShoppingServer.dll"]
