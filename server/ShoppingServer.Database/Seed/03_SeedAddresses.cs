using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedAddresses
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Addresses.AddRange(new[]
            {
                new AddressModel
                {
                    Id = "address-001",
                    UserId = "user-0001",
                    Name = "Eliseu Batista",
                    PostalCode = "1000-001",
                    City = "Lisboa",
                    Location = "Lisboa",
                    Street = "Av. da Liberdade 245, 3º Esq",
                    Country = "Portugal",
                    Phone = "911111111",
                    CountryCode = "PT",
                    IsDefault = true,
                    IsDbActive = true
                },
                new AddressModel
                {
                    Id = "address-002",
                    UserId = "user-0001",
                    Name = "Eliseu Batista",
                    PostalCode = "08007",
                    City = "Barcelona",
                    Location = "Catalunha",
                    Street = "Carrer de Provença 312",
                    Country = "Espanha",
                    Phone = "622333444",
                    CountryCode = "ES",
                    IsDefault = false,
                    IsDbActive = true
                },
                new AddressModel
                {
                    Id = "address-003",
                    UserId = "user-0001",
                    Name = "Eliseu Batista",
                    PostalCode = "75008",
                    City = "Paris",
                    Location = "Île-de-France",
                    Street = "Rue du Faubourg Saint-Honoré 128",
                    Country = "França",
                    Phone = "612345678",
                    CountryCode = "FR",
                    IsDefault = false,
                    IsDbActive = true
                }
            });

            db.SaveChanges();
        }
    }
}
