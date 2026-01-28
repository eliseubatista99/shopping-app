using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedOrdersStatus
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.OrdersStatus.AddRange(new[]
            {
                new OrdersStatusModel
                {
                    Id = "os-0001-1",
                    OrderId = "order-0001",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-01T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0001-2",
                    OrderId = "order-0001",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-02T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0001-3",
                    OrderId = "order-0001",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-03T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0001-4",
                    OrderId = "order-0001",
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0002-1",
                    OrderId = "order-0002",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-02T11:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0002-2",
                    OrderId = "order-0002",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-03T11:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0002-3",
                    OrderId = "order-0002",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T11:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0002-4",
                    OrderId = "order-0002",
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-05T11:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0003-1",
                    OrderId = "order-0003",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-03T12:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0003-2",
                    OrderId = "order-0003",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T12:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0004-1",
                    OrderId = "order-0004",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-04T13:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0005-1",
                    OrderId = "order-0005",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-05T14:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0005-2",
                    OrderId = "order-0005",
                    Status = "Cancelled",
                    StatusDate = DateTimeOffset.Parse("2025-01-05T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0006-1",
                    OrderId = "order-0006",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-06T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0006-2",
                    OrderId = "order-0006",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-07T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0006-3",
                    OrderId = "order-0006",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-08T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0006-4",
                    OrderId = "order-0006",
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-09T10:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0007-1",
                    OrderId = "order-0007",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-07T12:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0008-1",
                    OrderId = "order-0008",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-08T13:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0008-2",
                    OrderId = "order-0008",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-09T13:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0009-1",
                    OrderId = "order-0009",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-09T14:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0009-2",
                    OrderId = "order-0009",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-10T14:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0009-3",
                    OrderId = "order-0009",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-11T14:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0009-4",
                    OrderId = "order-0009",
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-12T14:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0010-1",
                    OrderId = "order-0010",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-10T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0010-2",
                    OrderId = "order-0010",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-11T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0010-3",
                    OrderId = "order-0010",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-12T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0010-4",
                    OrderId = "order-0010",
                    Status = "Delivered",
                    StatusDate = DateTimeOffset.Parse("2025-01-13T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0010-5",
                    OrderId = "order-0010",
                    Status = "Returned",
                    StatusDate = DateTimeOffset.Parse("2025-01-15T15:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0011-1",
                    OrderId = "order-0011",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-11T16:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0012-1",
                    OrderId = "order-0012",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-12T17:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0013-1",
                    OrderId = "order-0013",
                    Status = "Processing",
                    StatusDate = DateTimeOffset.Parse("2025-01-13T18:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0013-2",
                    OrderId = "order-0013",
                    Status = "Sent",
                    StatusDate = DateTimeOffset.Parse("2025-01-14T18:00:00+00:00")
                },
                new OrdersStatusModel
                {
                    Id = "os-0013-3",
                    OrderId = "order-0013",
                    Status = "InDelivery",
                    StatusDate = DateTimeOffset.Parse("2025-01-14T18:00:00+00:00")
                }
            });

            db.SaveChanges();
        }
    }
}
