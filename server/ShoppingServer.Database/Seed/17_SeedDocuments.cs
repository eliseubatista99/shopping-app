using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedDocuments
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Documents.AddRange(new[]
            {
                new DocumentModel
                {
                    Id = "doc-prod-001",
                    Name = "User Manual - Office Desk",
                    ProductId = "prod-001",
                    OrderId = null,
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-prod-002",
                    Name = "User Manual - Gaming Chair",
                    ProductId = "prod-005",
                    OrderId = null,
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-prod-003",
                    Name = "Quick Start Guide - Air Fryer",
                    ProductId = "prod-023",
                    OrderId = null,
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0001",
                    Name = "Invoice - Order 0001",
                    ProductId = null,
                    OrderId = "order-0001",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0002",
                    Name = "Invoice - Order 0002",
                    ProductId = null,
                    OrderId = "order-0002",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0003",
                    Name = "Invoice - Order 0003",
                    ProductId = null,
                    OrderId = "order-0003",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0004",
                    Name = "Invoice - Order 0004",
                    ProductId = null,
                    OrderId = "order-0004",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0005",
                    Name = "Invoice - Order 0005",
                    ProductId = null,
                    OrderId = "order-0005",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0006",
                    Name = "Invoice - Order 0006",
                    ProductId = null,
                    OrderId = "order-0006",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0007",
                    Name = "Invoice - Order 0007",
                    ProductId = null,
                    OrderId = "order-0007",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0008",
                    Name = "Invoice - Order 0008",
                    ProductId = null,
                    OrderId = "order-0008",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0009",
                    Name = "Invoice - Order 0009",
                    ProductId = null,
                    OrderId = "order-0009",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0010",
                    Name = "Invoice - Order 0010",
                    ProductId = null,
                    OrderId = "order-0010",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0011",
                    Name = "Invoice - Order 0011",
                    ProductId = null,
                    OrderId = "order-0011",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0012",
                    Name = "Invoice - Order 0012",
                    ProductId = null,
                    OrderId = "order-0012",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                },
                new DocumentModel
                {
                    Id = "doc-order-0013",
                    Name = "Invoice - Order 0013",
                    ProductId = null,
                    OrderId = "order-0013",
                    Content = SeedHelper.ReadText("Seed/Documents/exampleDocument.txt")
                }
            });

            db.SaveChanges();
        }
    }
}
