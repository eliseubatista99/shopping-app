using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedPaymentMethods
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.PaymentMethods.AddRange(new[]
            {
                new PaymentMethodModel
                {
                    Id = "pm-visa-0001",
                    UserId = "user-0001",
                    Type = "Card",
                    Name = "Eliseu Batista",
                    Network = "Visa",
                    Image = SeedHelper.ReadImage("Seed/Images/PaymentMethods/pm-visa-0001.jpg"),
                    CardNumber = "4532756279624064",
                    IsDefault = true,
                    SecurityCode = "123",
                    ExpirationMonth = 11,
                    ExpirationYear = 2027,
                    IsDbActive = true
                },
                new PaymentMethodModel
                {
                    Id = "pm-mastercard-0002",
                    UserId = "user-0001",
                    Type = "Card",
                    Name = "Eliseu Batista",
                    Network = "Mastercard",
                    Image = SeedHelper.ReadImage("Seed/Images/PaymentMethods/pm-mastercard-0002.jpg"),
                    CardNumber = "5555555555554444",
                    IsDefault = false,
                    SecurityCode = "456",
                    ExpirationMonth = 6,
                    ExpirationYear = 2028,
                    IsDbActive = true
                },
                new PaymentMethodModel
                {
                    Id = "pm-amex-0003",
                    UserId = "user-0001",
                    Type = "Card",
                    Name = "Eliseu Batista",
                    Network = "American Express",
                    Image = SeedHelper.ReadImage("Seed/Images/PaymentMethods/pm-amex-0003.jpg"),
                    CardNumber = "378282246310005",
                    IsDefault = false,
                    SecurityCode = "7890",
                    ExpirationMonth = 3,
                    ExpirationYear = 2026,
                    IsDbActive = true
                }
            });

            db.SaveChanges();
        }
    }
}
