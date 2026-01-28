using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedProductCategories
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.ProductCategories.AddRange(
                new ProductCategoryModel { ProductId = "prod-001", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-001", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-001", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-002", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-002", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-002", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-003", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-003", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-003", CategoryId = "cat-015", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-004", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-004", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-004", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-005", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-005", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-005", CategoryId = "cat-009", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-006", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-006", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-006", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-007", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-007", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-007", CategoryId = "cat-013", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-008", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-008", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-008", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-009", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-009", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-009", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-010", CategoryId = "cat-001", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-010", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-010", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-011", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-011", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-011", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-012", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-012", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-012", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-013", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-013", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-013", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-014", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-014", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-014", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-015", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-015", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-015", CategoryId = "cat-015", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-016", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-016", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-016", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-017", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-017", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-017", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-018", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-018", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-018", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-019", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-019", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-019", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-020", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-020", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-020", CategoryId = "cat-012", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-021", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-021", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-021", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-022", CategoryId = "cat-005", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-022", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-022", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-023", CategoryId = "cat-005", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-023", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-023", CategoryId = "cat-009", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-024", CategoryId = "cat-006", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-024", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-024", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-025", CategoryId = "cat-006", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-025", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-025", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-026", CategoryId = "cat-006", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-026", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-026", CategoryId = "cat-013", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-027", CategoryId = "cat-006", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-027", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-027", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-028", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-028", CategoryId = "cat-015", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-028", CategoryId = "cat-014", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-029", CategoryId = "cat-003", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-029", CategoryId = "cat-014", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-029", CategoryId = "cat-011", IsMain = false },

                new ProductCategoryModel { ProductId = "prod-030", CategoryId = "cat-004", IsMain = true },
                new ProductCategoryModel { ProductId = "prod-030", CategoryId = "cat-011", IsMain = false },
                new ProductCategoryModel { ProductId = "prod-030", CategoryId = "cat-014", IsMain = false }
            );

            db.SaveChanges();
        }
    }
}
