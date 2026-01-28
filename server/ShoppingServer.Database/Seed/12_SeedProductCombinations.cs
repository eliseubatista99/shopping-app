using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedProductCombinations
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.ProductCombinations.AddRange(new[]
            {
                new ProductCombinationModel { ProductId = "prod-001", CombinedProductId = "prod-011" },
                new ProductCombinationModel { ProductId = "prod-001", CombinedProductId = "prod-013" },
                new ProductCombinationModel { ProductId = "prod-002", CombinedProductId = "prod-011" },
                new ProductCombinationModel { ProductId = "prod-002", CombinedProductId = "prod-013" },
                new ProductCombinationModel { ProductId = "prod-005", CombinedProductId = "prod-013" },
                new ProductCombinationModel { ProductId = "prod-005", CombinedProductId = "prod-011" },
                new ProductCombinationModel { ProductId = "prod-006", CombinedProductId = "prod-013" },
                new ProductCombinationModel { ProductId = "prod-006", CombinedProductId = "prod-011" },
                new ProductCombinationModel { ProductId = "prod-007", CombinedProductId = "prod-009" },
                new ProductCombinationModel { ProductId = "prod-007", CombinedProductId = "prod-010" },
                new ProductCombinationModel { ProductId = "prod-008", CombinedProductId = "prod-009" },
                new ProductCombinationModel { ProductId = "prod-008", CombinedProductId = "prod-010" },
                new ProductCombinationModel { ProductId = "prod-015", CombinedProductId = "prod-020" },
                new ProductCombinationModel { ProductId = "prod-015", CombinedProductId = "prod-021" },
                new ProductCombinationModel { ProductId = "prod-020", CombinedProductId = "prod-021" },
                new ProductCombinationModel { ProductId = "prod-016", CombinedProductId = "prod-029" },
                new ProductCombinationModel { ProductId = "prod-017", CombinedProductId = "prod-029" },
                new ProductCombinationModel { ProductId = "prod-018", CombinedProductId = "prod-011" },
                new ProductCombinationModel { ProductId = "prod-019", CombinedProductId = "prod-012" },
                new ProductCombinationModel { ProductId = "prod-022", CombinedProductId = "prod-023" },
                new ProductCombinationModel { ProductId = "prod-022", CombinedProductId = "prod-024" },
                new ProductCombinationModel { ProductId = "prod-023", CombinedProductId = "prod-024" },
                new ProductCombinationModel { ProductId = "prod-024", CombinedProductId = "prod-026" },
                new ProductCombinationModel { ProductId = "prod-025", CombinedProductId = "prod-027" },
                new ProductCombinationModel { ProductId = "prod-026", CombinedProductId = "prod-027" },
                new ProductCombinationModel { ProductId = "prod-028", CombinedProductId = "prod-029" },
                new ProductCombinationModel { ProductId = "prod-029", CombinedProductId = "prod-030" }
            });

            db.SaveChanges();
        }
    }
}
