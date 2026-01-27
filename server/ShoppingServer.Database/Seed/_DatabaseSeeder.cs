namespace ShoppingServer.Database.Seed
{
    public static class DatabaseSeeder
    {
        private static bool NeedsSeed(AppDbContext db)
        {
            var hasAny = db.Users.Any() || db.Tokens.Any() || db.Addresses.Any() ||
                         db.PaymentMethods.Any() || db.Sellers.Any() || db.Categories.Any() |
                         db.ProductVariants.Any() || db.Products.Any() || db.ProductCategories.Any() |
                         db.ProductImages.Any() || db.RelatedProducts.Any() || db.ProductCombinations.Any() |
                         db.Carts.Any() || db.Orders.Any() || db.OrdersStatus.Any() |
                         db.OrderProducts.Any() || db.Documents.Any() || db.Reviews.Any() |
                         db.Wishlists.Any() || db.Banners.Any();

            return !hasAny;
        }

        public static void Seed(AppDbContext db)
        {
            if (!NeedsSeed(db))
                return;

            Console.WriteLine("SEEDING STARTED");

            SeedUsers.Seed(db);
            SeedTokens.Seed(db);
            SeedAddresses.Seed(db);
            SeedPaymentMethods.Seed(db);
            SeedSellers.Seed(db);
            SeedCategories.Seed(db);
            SeedProductVariantGroups.Seed(db);
            SeedProducts.Seed(db);
            SeedProductCategories.Seed(db);
            SeedProductImages.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);
            SeedUsers.Seed(db);

            Console.WriteLine("SEEDING DONE");
        }

    }
}
