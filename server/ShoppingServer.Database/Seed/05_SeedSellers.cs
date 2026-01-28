using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedSellers
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Sellers.AddRange(new[]
            {
                new SellerModel
                {
                    Id = "seller-0001",
                    Name = "TechZone",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0001.jpg"),
                    IsDbActive = true
                },
                new SellerModel
                {
                    Id = "seller-0002",
                    Name = "Home & Confort",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0002.jpg"),
                    IsDbActive = true
                },
                new SellerModel
                {
                    Id = "seller-0003",
                    Name = "Urban Fashion",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0003.jpg"),
                    IsDbActive = true
                },
                new SellerModel
                {
                    Id = "seller-0004",
                    Name = "Green Market",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0004.jpg"),
                    IsDbActive = true
                },
                new SellerModel
                {
                    Id = "seller-0005",
                    Name = "Pet Lovers",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0005.jpg"),
                    IsDbActive = true
                },
                new SellerModel
                {
                    Id = "seller-0006",
                    Name = "Sports Hub",
                    Image = SeedHelper.ReadImage("Seed/Images/Sellers/seller-0006.jpg"),
                    IsDbActive = true
                }
            });

            db.SaveChanges();
        }
    }
}
