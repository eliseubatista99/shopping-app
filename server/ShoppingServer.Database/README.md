# shopping-app

## library

### .NET EF Tool

dotnet tool uninstall --global dotnet-ef
dotnet tool install --global dotnet-ef --version 9.0.11


### Migrations

// If this is the first migration and we already have the tables created, we need to go to the migration file and delete the up()  and down()
dotnet ef migrations add InitialMigration --project ShoppingServer.Database --startup-project ShoppingServer

dotnet ef database update --project ShoppingServer.Database --startup-project ShoppingServer



