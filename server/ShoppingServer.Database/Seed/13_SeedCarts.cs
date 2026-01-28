using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedCarts
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Carts.AddRange(new[]
            {
                new CartModel { Id = "cart-001", ProductId = "prod-001", Quantity = 1, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-002", ProductId = "prod-005", Quantity = 1, UserId = "user-0001", IsSelected = false },
                new CartModel { Id = "cart-003", ProductId = "prod-011", Quantity = 2, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-004", ProductId = "prod-013", Quantity = 1, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-005", ProductId = "prod-015", Quantity = 1, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-006", ProductId = "prod-018", Quantity = 4, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-007", ProductId = "prod-024", Quantity = 1, UserId = "user-0001", IsSelected = true },
                new CartModel { Id = "cart-008", ProductId = "prod-029", Quantity = 1, UserId = "user-0001", IsSelected = true }
            });

            db.SaveChanges();
        }
    }
}
