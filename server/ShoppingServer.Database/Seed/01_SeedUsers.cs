using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedUsers
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Users.AddRange(new[]
            {
                new UserModel
                {
                    Id = "user-0001",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Eliseu",
                    Surname = "Batista",
                    Email = "eliseu@mail.com",
                    PhoneNumber = "911111111",
                    PhoneNumberPrefix = "+351",
                    Image = SeedHelper.ReadImage("Seed/Images/Users/user-001.jpg"),
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0002",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Marta",
                    Surname = "Silva",
                    Email = "marta.silva@mail.com",
                    PhoneNumber = "922222222",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0003",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "João",
                    Surname = "Costa",
                    Email = "joao.costa@mail.com",
                    PhoneNumber = "933333333",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0004",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Ana",
                    Surname = "Pereira",
                    Email = "ana.pereira@mail.com",
                    PhoneNumber = "944444444",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0005",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Ricardo",
                    Surname = "Mendes",
                    Email = "ricardo.mendes@mail.com",
                    PhoneNumber = "955555555",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0006",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Sofia",
                    Surname = "Gomes",
                    Email = "sofia.gomes@mail.com",
                    PhoneNumber = "966666666",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                },
                new UserModel
                {
                    Id = "user-0007",
                    PasswordHash = "AQAAAAIAAYagAAAAEFte+OmxfTNgdsClXxUrdP/dQA4fLBqAKibuvjM6m/7kPUWFO75cI1ooBAfoEe9GtQ==",
                    Name = "Pedro",
                    Surname = "Alves",
                    Email = "pedro.alves@mail.com",
                    PhoneNumber = "977777777",
                    PhoneNumberPrefix = "+351",
                    Image = null,
                    IsDbActive = true
                }
            });

            db.SaveChanges();
        }
    }
}
