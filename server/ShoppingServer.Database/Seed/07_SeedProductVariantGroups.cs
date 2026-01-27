using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedProductVariantGroups
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.ProductVariants.AddRange(new[]
            {
                new ProductVariantGroupModel { Id = "pvg-001", Name = "Office Desk" },
                new ProductVariantGroupModel { Id = "pvg-002", Name = "Standing Desk" },
                new ProductVariantGroupModel { Id = "pvg-003", Name = "Gaming Chair" },
                new ProductVariantGroupModel { Id = "pvg-004", Name = "Ergonomic Chair" },
                new ProductVariantGroupModel { Id = "pvg-005", Name = "LED Desk Lamp" },
                new ProductVariantGroupModel { Id = "pvg-006", Name = "Wireless Mouse" },
                new ProductVariantGroupModel { Id = "pvg-007", Name = "Mechanical Keyboard" },
                new ProductVariantGroupModel { Id = "pvg-008", Name = "Noise Cancelling Headphones" },
                new ProductVariantGroupModel { Id = "pvg-009", Name = "Smartphone Case" },
                new ProductVariantGroupModel { Id = "pvg-010", Name = "Laptop Sleeve" },
                new ProductVariantGroupModel { Id = "pvg-011", Name = "Bluetooth Speaker" },
                new ProductVariantGroupModel { Id = "pvg-012", Name = "Coffee Maker" },
                new ProductVariantGroupModel { Id = "pvg-013", Name = "Air Fryer" },
                new ProductVariantGroupModel { Id = "pvg-014", Name = "Yoga Mat" },
                new ProductVariantGroupModel { Id = "pvg-015", Name = "Running Shoes" },
                new ProductVariantGroupModel { Id = "pvg-016", Name = "Backpack" },
                new ProductVariantGroupModel { Id = "pvg-017", Name = "Water Bottle" },
                new ProductVariantGroupModel { Id = "pvg-018", Name = "Sunglasses" },
                new ProductVariantGroupModel { Id = "pvg-019", Name = "Smart Watch" },
                new ProductVariantGroupModel { Id = "pvg-020", Name = "Wall Art Poster" }
            });

            db.SaveChanges();
        }
    }
}
