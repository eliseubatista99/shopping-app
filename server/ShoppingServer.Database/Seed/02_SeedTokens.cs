using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedTokens
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Tokens.AddRange(new[]
            {
                new TokenModel
                {
                    Id = "0f44274a-6083-47de-a8eb-133d248ee0f8",
                    UserId = "user-0001",
                    Token = "FTVIRkwwtJwMHV3YQhWpXso3nvugIqm+rNUtPYoJX8KEXasG3Y02rcd9pc5DMOp3K0IMNJBqMdS7XADutRhP7A==",
                    CreatedAt = DateTimeOffset.UtcNow,
                    ExpiresAt = DateTimeOffset.UtcNow.AddDays(7),
                    RevokedAt = null
                }
            });

            db.SaveChanges();
        }
    }
}
