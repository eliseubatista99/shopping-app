using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedRelatedProducts
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.RelatedProducts.AddRange(new[]
            {
                new RelatedProductModel { ProductId = "prod-005", RelatedProductId = "prod-006" },
                new RelatedProductModel { ProductId = "prod-006", RelatedProductId = "prod-005" },
                new RelatedProductModel { ProductId = "prod-007", RelatedProductId = "prod-008" },
                new RelatedProductModel { ProductId = "prod-008", RelatedProductId = "prod-007" },
                new RelatedProductModel { ProductId = "prod-001", RelatedProductId = "prod-002" },
                new RelatedProductModel { ProductId = "prod-002", RelatedProductId = "prod-001" },
                new RelatedProductModel { ProductId = "prod-003", RelatedProductId = "prod-004" },
                new RelatedProductModel { ProductId = "prod-004", RelatedProductId = "prod-003" },
                new RelatedProductModel { ProductId = "prod-011", RelatedProductId = "prod-012" },
                new RelatedProductModel { ProductId = "prod-012", RelatedProductId = "prod-011" },
                new RelatedProductModel { ProductId = "prod-011", RelatedProductId = "prod-015" },
                new RelatedProductModel { ProductId = "prod-015", RelatedProductId = "prod-011" },
                new RelatedProductModel { ProductId = "prod-015", RelatedProductId = "prod-020" },
                new RelatedProductModel { ProductId = "prod-020", RelatedProductId = "prod-015" },
                new RelatedProductModel { ProductId = "prod-016", RelatedProductId = "prod-017" },
                new RelatedProductModel { ProductId = "prod-017", RelatedProductId = "prod-016" },
                new RelatedProductModel { ProductId = "prod-018", RelatedProductId = "prod-019" },
                new RelatedProductModel { ProductId = "prod-019", RelatedProductId = "prod-018" },
                new RelatedProductModel { ProductId = "prod-022", RelatedProductId = "prod-023" },
                new RelatedProductModel { ProductId = "prod-023", RelatedProductId = "prod-022" },
                new RelatedProductModel { ProductId = "prod-024", RelatedProductId = "prod-025" },
                new RelatedProductModel { ProductId = "prod-025", RelatedProductId = "prod-024" },
                new RelatedProductModel { ProductId = "prod-026", RelatedProductId = "prod-027" },
                new RelatedProductModel { ProductId = "prod-027", RelatedProductId = "prod-026" },
                new RelatedProductModel { ProductId = "prod-028", RelatedProductId = "prod-029" },
                new RelatedProductModel { ProductId = "prod-029", RelatedProductId = "prod-028" }
            });

            db.SaveChanges();
        }
    }
}
