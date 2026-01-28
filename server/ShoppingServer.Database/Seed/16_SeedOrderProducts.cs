using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedOrderProducts
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.OrderProducts.AddRange(new[]
            {
                new OrderProductModel { OrderId = "order-0001", ProductId = "prod-009", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0001", ProductId = "prod-011", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0002", ProductId = "prod-005", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0002", ProductId = "prod-013", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0002", ProductId = "prod-012", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0003", ProductId = "prod-001", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0003", ProductId = "prod-010", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0004", ProductId = "prod-003", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0004", ProductId = "prod-007", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0005", ProductId = "prod-024", Quantity = 2 },
                new OrderProductModel { OrderId = "order-0006", ProductId = "prod-023", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0007", ProductId = "prod-026", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0007", ProductId = "prod-027", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0008", ProductId = "prod-015", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0008", ProductId = "prod-020", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0009", ProductId = "prod-016", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0009", ProductId = "prod-017", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0010", ProductId = "prod-021", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0011", ProductId = "prod-004", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0011", ProductId = "prod-008", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0011", ProductId = "prod-014", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0012", ProductId = "prod-029", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0012", ProductId = "prod-016", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0013", ProductId = "prod-030", Quantity = 1 },
                new OrderProductModel { OrderId = "order-0013", ProductId = "prod-009", Quantity = 1 }
            });

            db.SaveChanges();
        }
    }
}
