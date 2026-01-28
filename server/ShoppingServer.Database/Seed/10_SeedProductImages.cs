using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedProductImages
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.ProductImages.AddRange(
                new ProductImageModel { Id = "img-prod-001-0", ProductId = "prod-001", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-001/prod-001-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-001-1", ProductId = "prod-001", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-001/pvg-001-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-002-0", ProductId = "prod-002", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-001/prod-002-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-002-1", ProductId = "prod-002", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-001/pvg-001-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-003-0", ProductId = "prod-003", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-002/prod-003-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-003-1", ProductId = "prod-003", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-002/pvg-002-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-004-0", ProductId = "prod-004", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-002/prod-004-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-004-1", ProductId = "prod-004", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-002/pvg-002-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-005-0", ProductId = "prod-005", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-003/prod-005-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-005-1", ProductId = "prod-005", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-003/pvg-003-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-006-0", ProductId = "prod-006", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-003/prod-006-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-006-1", ProductId = "prod-006", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-003/pvg-003-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-007-0", ProductId = "prod-007", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-004/prod-007-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-007-1", ProductId = "prod-007", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-004/pvg-004-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-008-0", ProductId = "prod-008", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-004/prod-008-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-008-1", ProductId = "prod-008", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-004/pvg-004-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-009-0", ProductId = "prod-009", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-005/prod-009-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-009-1", ProductId = "prod-009", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-005/prod-009-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-010-0", ProductId = "prod-010", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-005/prod-010-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-010-1", ProductId = "prod-010", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-005/prod-010-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-011-0", ProductId = "prod-011", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-006/prod-011-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-011-1", ProductId = "prod-011", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-006/prod-011-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-012-0", ProductId = "prod-012", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-006/prod-012-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-012-1", ProductId = "prod-012", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-006/prod-012-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-013-0", ProductId = "prod-013", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-007/prod-013-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-013-1", ProductId = "prod-013", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-007/pvg-007-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-014-0", ProductId = "prod-014", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-007/prod-014-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-014-1", ProductId = "prod-014", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-007/pvg-007-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-015-0", ProductId = "prod-015", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-008/prod-015-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-015-1", ProductId = "prod-015", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-008/prod-015-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-016-0", ProductId = "prod-016", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-009/prod-016-001.jpg"), SortOrder = 0 },

                new ProductImageModel { Id = "img-prod-017-0", ProductId = "prod-017", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-009/prod-017-001.jpg"), SortOrder = 0 },

                new ProductImageModel { Id = "img-prod-018-0", ProductId = "prod-018", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-018-1", ProductId = "prod-018", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-002.jpg"), SortOrder = 1 },
                new ProductImageModel { Id = "img-prod-018-2", ProductId = "prod-018", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-003.jpg"), SortOrder = 2 },

                new ProductImageModel { Id = "img-prod-019-0", ProductId = "prod-019", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-019-1", ProductId = "prod-019", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-002.jpg"), SortOrder = 1 },
                new ProductImageModel { Id = "img-prod-019-2", ProductId = "prod-019", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-010/pvg-010-003.jpg"), SortOrder = 2 },

                new ProductImageModel { Id = "img-prod-020-0", ProductId = "prod-020", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-011/prod-020-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-020-1", ProductId = "prod-020", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-011/pvg-011-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-021-0", ProductId = "prod-021", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-011/prod-021-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-021-1", ProductId = "prod-021", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-011/pvg-011-001.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-022-0", ProductId = "prod-022", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-012/prod-022-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-022-1", ProductId = "prod-022", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-012/prod-022-002.jpg"), SortOrder = 1 },
                new ProductImageModel { Id = "img-prod-022-2", ProductId = "prod-022", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-012/prod-022-003.jpg"), SortOrder = 2 },

                new ProductImageModel { Id = "img-prod-023-0", ProductId = "prod-023", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-013/prod-023-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-023-1", ProductId = "prod-023", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-013/prod-023-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-024-0", ProductId = "prod-024", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-014/prod-024-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-024-1", ProductId = "prod-024", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-014/prod-024-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-025-0", ProductId = "prod-025", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-015/prod-025-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-025-1", ProductId = "prod-025", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-015/prod-025-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-026-0", ProductId = "prod-026", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-016/prod-026-001.jpg"), SortOrder = 0 },

                new ProductImageModel { Id = "img-prod-027-0", ProductId = "prod-027", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-017/prod-027-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-027-1", ProductId = "prod-027", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-017/prod-027-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-028-0", ProductId = "prod-028", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-018/prod-028-001.jpg"), SortOrder = 0 },

                new ProductImageModel { Id = "img-prod-029-0", ProductId = "prod-029", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-019/prod-029-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-029-1", ProductId = "prod-029", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-019/prod-029-002.jpg"), SortOrder = 1 },

                new ProductImageModel { Id = "img-prod-030-0", ProductId = "prod-030", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-020/prod-030-001.jpg"), SortOrder = 0 },
                new ProductImageModel { Id = "img-prod-030-1", ProductId = "prod-030", Image = SeedHelper.ReadImage("Seed/Images/Products/pvg-020/prod-030-002.jpg"), SortOrder = 1 }
            );

            db.SaveChanges();
        }
    }
}
