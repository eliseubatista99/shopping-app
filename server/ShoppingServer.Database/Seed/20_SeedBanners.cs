using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedBanners
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Banners.AddRange(
                new BannerModel
                {
                    Id = "banner-0001",
                    Title = "Christmas Gifts",
                    Subtitle = "Até 23 de Dezembro",
                    Category = "Christmas",
                    TextColor = "#ffffff",
                    Image = File.ReadAllBytes("Seed/Images/Banners/banner-0001.jpg"),
                    CreatedAt = DateTimeOffset.UtcNow
                },
                new BannerModel
                {
                    Id = "banner-0002",
                    Title = "Back to School Deals",
                    Subtitle = "Volta às aulas com descontos",
                    Category = "Back to School",
                    TextColor = "#000000",
                    Image = File.ReadAllBytes("Seed/Images/Banners/banner-0002.jpg"),
                    CreatedAt = DateTimeOffset.UtcNow
                },
                new BannerModel
                {
                    Id = "banner-0003",
                    Title = "Home Office Essentials",
                    Subtitle = "Tudo para o teu escritório",
                    Category = "Office",
                    TextColor = "#ffffff",
                    Image = File.ReadAllBytes("Seed/Images/Banners/banner-0003.jpg"),
                    CreatedAt = DateTimeOffset.UtcNow
                }
            );
            db.SaveChanges();
        }
    }
}
