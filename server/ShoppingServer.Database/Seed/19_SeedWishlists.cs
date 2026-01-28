using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedWishlists
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Wishlists.AddRange(
                new WishlistModel { ProductId = "prod-002", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-004", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-006", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-008", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-014", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-019", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow },
                new WishlistModel { ProductId = "prod-023", UserId = "user-0001", CreatedAt = DateTimeOffset.UtcNow }
            );
            db.SaveChanges();
        }
    }
}
