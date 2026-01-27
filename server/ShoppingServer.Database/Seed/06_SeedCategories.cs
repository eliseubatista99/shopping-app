using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedCategories
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Categories.AddRange(new[]
            {
                new CategoryModel { Id = "cat-001", Name = "Office" },
                new CategoryModel { Id = "cat-002", Name = "Garden" },
                new CategoryModel { Id = "cat-003", Name = "Electronics" },
                new CategoryModel { Id = "cat-004", Name = "Home Decor" },
                new CategoryModel { Id = "cat-005", Name = "Kitchen" },
                new CategoryModel { Id = "cat-006", Name = "Sports" },
                new CategoryModel { Id = "cat-007", Name = "Beauty" },
                new CategoryModel { Id = "cat-008", Name = "Toys" },
                new CategoryModel { Id = "cat-009", Name = "Christmas" },
                new CategoryModel { Id = "cat-010", Name = "Back to School" },
                new CategoryModel { Id = "cat-011", Name = "Under €10" },
                new CategoryModel { Id = "cat-012", Name = "Fathers Day" },
                new CategoryModel { Id = "cat-013", Name = "Mothers Day" },
                new CategoryModel { Id = "cat-014", Name = "Eco Friendly" },
                new CategoryModel { Id = "cat-015", Name = "Limited Edition" }
            });

            db.SaveChanges();
        }
    }
}
