using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedOrders
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Orders.AddRange(new[]
            {
                new OrderModel
                {
                    Id = "order-0001",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-01T10:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-001",
                    ProductCost = 79.98,
                    ShippingCost = 10.98,
                    TotalCost = 90.96,
                    Discounts = 0.00,
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T10:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0002",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-02T11:00:00+00:00"),
                    PaymentMethodId = "pm-mastercard-0002",
                    AddressId = "address-001",
                    ProductCost = 314.97,
                    ShippingCost = 21.97,
                    TotalCost = 336.94,
                    Discounts = 0.00,
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-05T11:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0003",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-03T12:00:00+00:00"),
                    PaymentMethodId = "pm-amex-0003",
                    AddressId = "address-002",
                    ProductCost = 289.98,
                    ShippingCost = 20.98,
                    TotalCost = 310.96,
                    Discounts = 0.00,
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T12:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0004",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-04T13:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-002",
                    ProductCost = 659.98,
                    ShippingCost = 29.98,
                    TotalCost = 689.96,
                    Discounts = 0.00,
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T13:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0005",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-05T14:00:00+00:00"),
                    PaymentMethodId = "pm-mastercard-0002",
                    AddressId = "address-003",
                    ProductCost = 59.98,
                    ShippingCost = 9.98,
                    TotalCost = 0.00,
                    Discounts = 69.96,
                    Status = "Cancelled",
                    StatusDate = DateTimeOffset.Parse("2025-01-05T15:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0006",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-06T10:00:00+00:00"),
                    PaymentMethodId = "pm-amex-0003",
                    AddressId = "address-001",
                    ProductCost = 119.99,
                    ShippingCost = 9.99,
                    TotalCost = 129.98,
                    Discounts = 0.00,
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-09T10:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0007",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-07T12:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-003",
                    ProductCost = 74.98,
                    ShippingCost = 11.98,
                    TotalCost = 86.96,
                    Discounts = 0.00,
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-07T12:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0008",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-08T13:00:00+00:00"),
                    PaymentMethodId = "pm-mastercard-0002",
                    AddressId = "address-001",
                    ProductCost = 189.98,
                    ShippingCost = 17.98,
                    TotalCost = 207.96,
                    Discounts = 0.00,
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-09T13:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0009",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-09T14:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-002",
                    ProductCost = 49.98,
                    ShippingCost = 7.98,
                    TotalCost = 57.96,
                    Discounts = 5.00,
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-12T14:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0010",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-10T15:00:00+00:00"),
                    PaymentMethodId = "pm-amex-0003",
                    AddressId = "address-003",
                    ProductCost = 69.99,
                    ShippingCost = 7.99,
                    TotalCost = 0.00,
                    Discounts = 77.98,
                    Status = "Cancelled",
                    StatusDate = DateTimeOffset.Parse("2025-01-15T15:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0011",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-11T16:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-001",
                    ProductCost = 634.97,
                    ShippingCost = 36.97,
                    TotalCost = 671.94,
                    Discounts = 0.00,
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-11T16:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0012",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-12T17:00:00+00:00"),
                    PaymentMethodId = "pm-mastercard-0002",
                    AddressId = "address-002",
                    ProductCost = 149.98,
                    ShippingCost = 11.98,
                    TotalCost = 161.96,
                    Discounts = 0.00,
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-12T17:00:00+00:00")
                },
                new OrderModel
                {
                    Id = "order-0013",
                    UserId = "user-0001",
                    CreatedAt = DateTimeOffset.Parse("2025-01-13T18:00:00+00:00"),
                    PaymentMethodId = "pm-visa-0001",
                    AddressId = "address-003",
                    ProductCost = 69.98,
                    ShippingCost = 9.98,
                    TotalCost = 79.96,
                    Discounts = 0.00,
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-16T18:00:00+00:00")
                }
            });

            db.SaveChanges();
        }
    }
}
