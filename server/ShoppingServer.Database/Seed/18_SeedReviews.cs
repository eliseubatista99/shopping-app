using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Seed
{
    public static class SeedReviews
    {
        public static void Seed(AppDbContext db)
        {
            db.ChangeTracker.Clear();

            db.Reviews.AddRange(new[]
            {
                new ReviewModel
                {
                    Id = "review-prod-001-1",
                    ReviewerId = "user-0001",
                    ProductId = "prod-001",
                    Score = 5,
                    Title = "Great desk, solid build",
                    CreatedAt = DateTimeOffset.Parse("2025-01-10T09:15:00+00:00"),
                    Comment = "Exactly what I needed for my home office. Very sturdy."
                },
                new ReviewModel
                {
                    Id = "review-prod-001-2",
                    ReviewerId = "user-0002",
                    ProductId = "prod-001",
                    Score = 4,
                    Title = "Nice but heavy",
                    CreatedAt = DateTimeOffset.Parse("2025-02-02T11:20:00+00:00"),
                    Comment = "Looks great, but it is quite heavy to move."
                },
                new ReviewModel
                {
                    Id = "review-prod-001-3",
                    ReviewerId = "user-0003",
                    ProductId = "prod-001",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-03-05T14:10:00+00:00"),
                    Comment = "Solid desk for the price, only complaint is the finish."
                },
                new ReviewModel
                {
                    Id = "review-prod-002-1",
                    ReviewerId = "user-0002",
                    ProductId = "prod-002",
                    Score = 4,
                    Title = "Clean design",
                    CreatedAt = DateTimeOffset.Parse("2025-01-15T10:05:00+00:00"),
                    Comment = "The white finish is nice. Could use better cable management."
                },
                new ReviewModel
                {
                    Id = "review-prod-002-2",
                    ReviewerId = "user-0004",
                    ProductId = "prod-002",
                    Score = 5,
                    Title = "Perfect for my room",
                    CreatedAt = DateTimeOffset.Parse("2025-02-18T16:40:00+00:00"),
                    Comment = "Fits perfectly and looks clean."
                },
                new ReviewModel
                {
                    Id = "review-prod-002-3",
                    ReviewerId = "user-0005",
                    ProductId = "prod-002",
                    Score = 4,
                    Title = "Solid desk",
                    CreatedAt = DateTimeOffset.Parse("2025-03-22T12:30:00+00:00"),
                    Comment = "Stable and well built, but assembly took time."
                },
                new ReviewModel
                {
                    Id = "review-prod-003-1",
                    ReviewerId = "user-0003",
                    ProductId = "prod-003",
                    Score = 5,
                    Title = "Worth every penny",
                    CreatedAt = DateTimeOffset.Parse("2025-01-20T09:55:00+00:00"),
                    Comment = "The electric lift works smoothly and is very quiet."
                },
                new ReviewModel
                {
                    Id = "review-prod-003-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-003",
                    Score = 5,
                    Title = "Excellent desk",
                    CreatedAt = DateTimeOffset.Parse("2025-02-25T14:00:00+00:00"),
                    Comment = "Great for standing work."
                },
                new ReviewModel
                {
                    Id = "review-prod-003-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-003",
                    Score = 4,
                    Title = "Almost perfect",
                    CreatedAt = DateTimeOffset.Parse("2025-03-28T18:10:00+00:00"),
                    Comment = "Only issue is the cable management."
                },
                new ReviewModel
                {
                    Id = "review-prod-004-1",
                    ReviewerId = "user-0004",
                    ProductId = "prod-004",
                    Score = 3,
                    Title = "Good but manual",
                    CreatedAt = DateTimeOffset.Parse("2025-01-25T11:05:00+00:00"),
                    Comment = "Good desk, but manual adjustment is slower than I expected."
                },
                new ReviewModel
                {
                    Id = "review-prod-004-2",
                    ReviewerId = "user-0005",
                    ProductId = "prod-004",
                    Score = 4,
                    Title = "Nice desk",
                    CreatedAt = DateTimeOffset.Parse("2025-02-28T13:50:00+00:00"),
                    Comment = "Solid and stable, just wish it was electric."
                },
                new ReviewModel
                {
                    Id = "review-prod-004-3",
                    ReviewerId = "user-0001",
                    ProductId = "prod-004",
                    Score = 4,
                    Title = "Value for money",
                    CreatedAt = DateTimeOffset.Parse("2025-03-30T09:25:00+00:00"),
                    Comment = "Good price for a standing desk."
                },
                new ReviewModel
                {
                    Id = "review-prod-005-1",
                    ReviewerId = "user-0006",
                    ProductId = "prod-005",
                    Score = 5,
                    Title = "Perfect for gaming",
                    CreatedAt = DateTimeOffset.Parse("2025-01-30T19:05:00+00:00"),
                    Comment = "Very comfortable and looks awesome."
                },
                new ReviewModel
                {
                    Id = "review-prod-005-2",
                    ReviewerId = "user-0007",
                    ProductId = "prod-005",
                    Score = 5,
                    Title = "Super comfy",
                    CreatedAt = DateTimeOffset.Parse("2025-02-06T12:15:00+00:00"),
                    Comment = "Great support and build quality."
                },
                new ReviewModel
                {
                    Id = "review-prod-005-3",
                    ReviewerId = "user-0002",
                    ProductId = "prod-005",
                    Score = 4,
                    Title = "Great chair",
                    CreatedAt = DateTimeOffset.Parse("2025-03-05T15:20:00+00:00"),
                    Comment = "Comfortable, but a bit firm at first."
                },
                new ReviewModel
                {
                    Id = "review-prod-006-1",
                    ReviewerId = "user-0003",
                    ProductId = "prod-006",
                    Score = 4,
                    Title = "Comfortable chair",
                    CreatedAt = DateTimeOffset.Parse("2025-01-08T10:10:00+00:00"),
                    Comment = "Nice chair, but the lumbar support could be better."
                },
                new ReviewModel
                {
                    Id = "review-prod-006-2",
                    ReviewerId = "user-0004",
                    ProductId = "prod-006",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-02-12T17:30:00+00:00"),
                    Comment = "Comfortable and looks good."
                },
                new ReviewModel
                {
                    Id = "review-prod-006-3",
                    ReviewerId = "user-0005",
                    ProductId = "prod-006",
                    Score = 5,
                    Title = "Great color",
                    CreatedAt = DateTimeOffset.Parse("2025-03-16T09:40:00+00:00"),
                    Comment = "The blue/black looks amazing and it is comfy."
                },
                new ReviewModel
                {
                    Id = "review-prod-007-1",
                    ReviewerId = "user-0001",
                    ProductId = "prod-007",
                    Score = 4,
                    Title = "Breathable mesh",
                    CreatedAt = DateTimeOffset.Parse("2025-01-12T13:05:00+00:00"),
                    Comment = "Great for long hours. The mesh is very breathable."
                },
                new ReviewModel
                {
                    Id = "review-prod-007-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-007",
                    Score = 4,
                    Title = "Good chair",
                    CreatedAt = DateTimeOffset.Parse("2025-02-19T09:50:00+00:00"),
                    Comment = "Comfortable, but the seat is a bit firm."
                },
                new ReviewModel
                {
                    Id = "review-prod-007-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-007",
                    Score = 3,
                    Title = "Ok chair",
                    CreatedAt = DateTimeOffset.Parse("2025-03-21T11:45:00+00:00"),
                    Comment = "Decent but expected more for the price."
                },
                new ReviewModel
                {
                    Id = "review-prod-008-1",
                    ReviewerId = "user-0002",
                    ProductId = "prod-008",
                    Score = 5,
                    Title = "Premium feel",
                    CreatedAt = DateTimeOffset.Parse("2025-01-18T10:55:00+00:00"),
                    Comment = "Leather feels premium and it is very comfortable."
                },
                new ReviewModel
                {
                    Id = "review-prod-008-2",
                    ReviewerId = "user-0003",
                    ProductId = "prod-008",
                    Score = 5,
                    Title = "Best chair I bought",
                    CreatedAt = DateTimeOffset.Parse("2025-02-23T14:25:00+00:00"),
                    Comment = "Super comfy and looks great."
                },
                new ReviewModel
                {
                    Id = "review-prod-008-3",
                    ReviewerId = "user-0004",
                    ProductId = "prod-008",
                    Score = 4,
                    Title = "Very good",
                    CreatedAt = DateTimeOffset.Parse("2025-03-26T16:35:00+00:00"),
                    Comment = "Comfortable but a bit heavy."
                },
                new ReviewModel
                {
                    Id = "review-prod-009-1",
                    ReviewerId = "user-0005",
                    ProductId = "prod-009",
                    Score = 3,
                    Title = "Decent lamp",
                    CreatedAt = DateTimeOffset.Parse("2025-01-03T18:20:00+00:00"),
                    Comment = "Good brightness but the base is a bit unstable."
                },
                new ReviewModel
                {
                    Id = "review-prod-009-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-009",
                    Score = 4,
                    Title = "Nice lamp",
                    CreatedAt = DateTimeOffset.Parse("2025-02-08T10:30:00+00:00"),
                    Comment = "Bright enough and easy to use."
                },
                new ReviewModel
                {
                    Id = "review-prod-009-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-009",
                    Score = 4,
                    Title = "Good for price",
                    CreatedAt = DateTimeOffset.Parse("2025-03-10T12:40:00+00:00"),
                    Comment = "Good lamp for the money."
                },
                new ReviewModel
                {
                    Id = "review-prod-010-1",
                    ReviewerId = "user-0001",
                    ProductId = "prod-010",
                    Score = 4,
                    Title = "Simple and useful",
                    CreatedAt = DateTimeOffset.Parse("2025-01-07T12:45:00+00:00"),
                    Comment = "Good lamp for the price. USB power is convenient."
                },
                new ReviewModel
                {
                    Id = "review-prod-010-2",
                    ReviewerId = "user-0002",
                    ProductId = "prod-010",
                    Score = 4,
                    Title = "Nice lamp",
                    CreatedAt = DateTimeOffset.Parse("2025-02-11T15:05:00+00:00"),
                    Comment = "Works well, just wish it was brighter."
                },
                new ReviewModel
                {
                    Id = "review-prod-010-3",
                    ReviewerId = "user-0003",
                    ProductId = "prod-010",
                    Score = 3,
                    Title = "Ok lamp",
                    CreatedAt = DateTimeOffset.Parse("2025-03-15T17:15:00+00:00"),
                    Comment = "Decent but not very durable."
                },
                new ReviewModel
                {
                    Id = "review-prod-011-1",
                    ReviewerId = "user-0004",
                    ProductId = "prod-011",
                    Score = 5,
                    Title = "Best mouse I’ve used",
                    CreatedAt = DateTimeOffset.Parse("2025-01-21T11:55:00+00:00"),
                    Comment = "Very ergonomic and responsive."
                },
                new ReviewModel
                {
                    Id = "review-prod-011-2",
                    ReviewerId = "user-0005",
                    ProductId = "prod-011",
                    Score = 4,
                    Title = "Great mouse",
                    CreatedAt = DateTimeOffset.Parse("2025-02-24T13:20:00+00:00"),
                    Comment = "Comfortable and accurate."
                },
                new ReviewModel
                {
                    Id = "review-prod-011-3",
                    ReviewerId = "user-0006",
                    ProductId = "prod-011",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-03-27T10:05:00+00:00"),
                    Comment = "Nice mouse, but a bit small for my hand."
                },
                new ReviewModel
                {
                    Id = "review-prod-012-1",
                    ReviewerId = "user-0007",
                    ProductId = "prod-012",
                    Score = 4,
                    Title = "RGB is fun",
                    CreatedAt = DateTimeOffset.Parse("2025-01-02T09:00:00+00:00"),
                    Comment = "Great mouse, the RGB looks cool."
                },
                new ReviewModel
                {
                    Id = "review-prod-012-2",
                    ReviewerId = "user-0001",
                    ProductId = "prod-012",
                    Score = 5,
                    Title = "Awesome mouse",
                    CreatedAt = DateTimeOffset.Parse("2025-02-05T10:10:00+00:00"),
                    Comment = "Comfortable and fast."
                },
                new ReviewModel
                {
                    Id = "review-prod-012-3",
                    ReviewerId = "user-0002",
                    ProductId = "prod-012",
                    Score = 4,
                    Title = "Good mouse",
                    CreatedAt = DateTimeOffset.Parse("2025-03-09T14:50:00+00:00"),
                    Comment = "Nice performance, RGB is a bonus."
                },
                new ReviewModel
                {
                    Id = "review-prod-013-1",
                    ReviewerId = "user-0003",
                    ProductId = "prod-013",
                    Score = 5,
                    Title = "Excellent keyboard",
                    CreatedAt = DateTimeOffset.Parse("2025-01-04T14:25:00+00:00"),
                    Comment = "Typing feels great and the switches are smooth."
                },
                new ReviewModel
                {
                    Id = "review-prod-013-2",
                    ReviewerId = "user-0004",
                    ProductId = "prod-013",
                    Score = 5,
                    Title = "Very responsive",
                    CreatedAt = DateTimeOffset.Parse("2025-02-07T16:40:00+00:00"),
                    Comment = "Great build and feel."
                },
                new ReviewModel
                {
                    Id = "review-prod-013-3",
                    ReviewerId = "user-0005",
                    ProductId = "prod-013",
                    Score = 4,
                    Title = "Good keyboard",
                    CreatedAt = DateTimeOffset.Parse("2025-03-11T12:30:00+00:00"),
                    Comment = "Great but a bit noisy."
                },
                new ReviewModel
                {
                    Id = "review-prod-014-1",
                    ReviewerId = "user-0006",
                    ProductId = "prod-014",
                    Score = 4,
                    Title = "Good keyboard",
                    CreatedAt = DateTimeOffset.Parse("2025-01-06T13:30:00+00:00"),
                    Comment = "Nice keyboard but a bit loud for my taste."
                },
                new ReviewModel
                {
                    Id = "review-prod-014-2",
                    ReviewerId = "user-0007",
                    ProductId = "prod-014",
                    Score = 5,
                    Title = "Love it",
                    CreatedAt = DateTimeOffset.Parse("2025-02-09T15:20:00+00:00"),
                    Comment = "Great typing feel and good build."
                },
                new ReviewModel
                {
                    Id = "review-prod-014-3",
                    ReviewerId = "user-0001",
                    ProductId = "prod-014",
                    Score = 4,
                    Title = "Very good",
                    CreatedAt = DateTimeOffset.Parse("2025-03-13T10:40:00+00:00"),
                    Comment = "Good keyboard, works great for gaming."
                },
                new ReviewModel
                {
                    Id = "review-prod-015-1",
                    ReviewerId = "user-0002",
                    ProductId = "prod-015",
                    Score = 5,
                    Title = "Amazing sound",
                    CreatedAt = DateTimeOffset.Parse("2025-01-09T12:10:00+00:00"),
                    Comment = "Noise cancelling works very well."
                },
                new ReviewModel
                {
                    Id = "review-prod-015-2",
                    ReviewerId = "user-0003",
                    ProductId = "prod-015",
                    Score = 5,
                    Title = "Best headphones",
                    CreatedAt = DateTimeOffset.Parse("2025-02-13T18:00:00+00:00"),
                    Comment = "Super comfortable and sound is great."
                },
                new ReviewModel
                {
                    Id = "review-prod-015-3",
                    ReviewerId = "user-0004",
                    ProductId = "prod-015",
                    Score = 4,
                    Title = "Great but pricey",
                    CreatedAt = DateTimeOffset.Parse("2025-03-17T14:45:00+00:00"),
                    Comment = "Excellent sound, just a bit expensive."
                },
                new ReviewModel
                {
                    Id = "review-prod-016-1",
                    ReviewerId = "user-0005",
                    ProductId = "prod-016",
                    Score = 4,
                    Title = "Good case",
                    CreatedAt = DateTimeOffset.Parse("2025-01-11T10:50:00+00:00"),
                    Comment = "Fits well and feels durable."
                },
                new ReviewModel
                {
                    Id = "review-prod-016-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-016",
                    Score = 3,
                    Title = "Ok case",
                    CreatedAt = DateTimeOffset.Parse("2025-02-14T12:20:00+00:00"),
                    Comment = "Decent but the material feels cheap."
                },
                new ReviewModel
                {
                    Id = "review-prod-016-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-016",
                    Score = 4,
                    Title = "Nice case",
                    CreatedAt = DateTimeOffset.Parse("2025-03-18T09:15:00+00:00"),
                    Comment = "Good fit and soft."
                },
                new ReviewModel
                {
                    Id = "review-prod-017-1",
                    ReviewerId = "user-0001",
                    ProductId = "prod-017",
                    Score = 5,
                    Title = "Premium case",
                    CreatedAt = DateTimeOffset.Parse("2025-01-13T15:05:00+00:00"),
                    Comment = "Leather feels great and it looks stylish."
                },
                new ReviewModel
                {
                    Id = "review-prod-017-2",
                    ReviewerId = "user-0002",
                    ProductId = "prod-017",
                    Score = 4,
                    Title = "Good quality",
                    CreatedAt = DateTimeOffset.Parse("2025-02-16T11:30:00+00:00"),
                    Comment = "Nice case, a bit pricey though."
                },
                new ReviewModel
                {
                    Id = "review-prod-017-3",
                    ReviewerId = "user-0003",
                    ProductId = "prod-017",
                    Score = 5,
                    Title = "Perfect fit",
                    CreatedAt = DateTimeOffset.Parse("2025-03-20T13:40:00+00:00"),
                    Comment = "Looks great and feels durable."
                },
                new ReviewModel
                {
                    Id = "review-prod-018-1",
                    ReviewerId = "user-0004",
                    ProductId = "prod-018",
                    Score = 4,
                    Title = "Nice sleeve",
                    CreatedAt = DateTimeOffset.Parse("2025-01-17T09:40:00+00:00"),
                    Comment = "Good protection and fits my laptop perfectly."
                },
                new ReviewModel
                {
                    Id = "review-prod-018-2",
                    ReviewerId = "user-0005",
                    ProductId = "prod-018",
                    Score = 4,
                    Title = "Good sleeve",
                    CreatedAt = DateTimeOffset.Parse("2025-02-20T14:10:00+00:00"),
                    Comment = "Good quality, but a bit bulky."
                },
                new ReviewModel
                {
                    Id = "review-prod-018-3",
                    ReviewerId = "user-0006",
                    ProductId = "prod-018",
                    Score = 5,
                    Title = "Great sleeve",
                    CreatedAt = DateTimeOffset.Parse("2025-03-24T16:25:00+00:00"),
                    Comment = "Perfect size and very durable."
                },
                new ReviewModel
                {
                    Id = "review-prod-019-1",
                    ReviewerId = "user-0007",
                    ProductId = "prod-019",
                    Score = 4,
                    Title = "Great sleeve",
                    CreatedAt = DateTimeOffset.Parse("2025-01-19T12:55:00+00:00"),
                    Comment = "Slightly larger but still good quality."
                },
                new ReviewModel
                {
                    Id = "review-prod-019-2",
                    ReviewerId = "user-0001",
                    ProductId = "prod-019",
                    Score = 5,
                    Title = "Perfect fit",
                    CreatedAt = DateTimeOffset.Parse("2025-02-22T10:15:00+00:00"),
                    Comment = "Fits my 15-inch laptop perfectly."
                },
                new ReviewModel
                {
                    Id = "review-prod-019-3",
                    ReviewerId = "user-0002",
                    ProductId = "prod-019",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-03-26T11:45:00+00:00"),
                    Comment = "Good sleeve for the price."
                },
                new ReviewModel
                {
                    Id = "review-prod-020-1",
                    ReviewerId = "user-0003",
                    ProductId = "prod-020",
                    Score = 5,
                    Title = "Excellent speaker",
                    CreatedAt = DateTimeOffset.Parse("2025-01-21T18:05:00+00:00"),
                    Comment = "Sound is loud and clear, great battery life."
                },
                new ReviewModel
                {
                    Id = "review-prod-020-2",
                    ReviewerId = "user-0004",
                    ProductId = "prod-020",
                    Score = 4,
                    Title = "Good speaker",
                    CreatedAt = DateTimeOffset.Parse("2025-02-24T09:35:00+00:00"),
                    Comment = "Very good sound, but a bit heavy."
                },
                new ReviewModel
                {
                    Id = "review-prod-020-3",
                    ReviewerId = "user-0005",
                    ProductId = "prod-020",
                    Score = 5,
                    Title = "Best portable speaker",
                    CreatedAt = DateTimeOffset.Parse("2025-03-28T13:10:00+00:00"),
                    Comment = "Great for outdoor use."
                },
                new ReviewModel
                {
                    Id = "review-prod-021-1",
                    ReviewerId = "user-0006",
                    ProductId = "prod-021",
                    Score = 4,
                    Title = "Good waterproof speaker",
                    CreatedAt = DateTimeOffset.Parse("2025-01-23T10:05:00+00:00"),
                    Comment = "Works well near water, good sound."
                },
                new ReviewModel
                {
                    Id = "review-prod-021-2",
                    ReviewerId = "user-0007",
                    ProductId = "prod-021",
                    Score = 5,
                    Title = "Amazing speaker",
                    CreatedAt = DateTimeOffset.Parse("2025-02-26T14:50:00+00:00"),
                    Comment = "Perfect for pool parties."
                },
                new ReviewModel
                {
                    Id = "review-prod-021-3",
                    ReviewerId = "user-0001",
                    ProductId = "prod-021",
                    Score = 4,
                    Title = "Very good",
                    CreatedAt = DateTimeOffset.Parse("2025-03-30T15:30:00+00:00"),
                    Comment = "Great sound but a bit pricey."
                },
                new ReviewModel
                {
                    Id = "review-prod-022-1",
                    ReviewerId = "user-0002",
                    ProductId = "prod-022",
                    Score = 4,
                    Title = "Good coffee maker",
                    CreatedAt = DateTimeOffset.Parse("2025-01-24T11:15:00+00:00"),
                    Comment = "Makes good coffee, easy to clean."
                },
                new ReviewModel
                {
                    Id = "review-prod-022-2",
                    ReviewerId = "user-0003",
                    ProductId = "prod-022",
                    Score = 5,
                    Title = "Love it",
                    CreatedAt = DateTimeOffset.Parse("2025-02-27T13:25:00+00:00"),
                    Comment = "Great taste and easy to use."
                },
                new ReviewModel
                {
                    Id = "review-prod-022-3",
                    ReviewerId = "user-0004",
                    ProductId = "prod-022",
                    Score = 4,
                    Title = "Very good",
                    CreatedAt = DateTimeOffset.Parse("2025-03-31T16:05:00+00:00"),
                    Comment = "Solid machine, good price."
                },
                new ReviewModel
                {
                    Id = "review-prod-023-1",
                    ReviewerId = "user-0005",
                    ProductId = "prod-023",
                    Score = 5,
                    Title = "Best air fryer",
                    CreatedAt = DateTimeOffset.Parse("2025-01-26T09:35:00+00:00"),
                    Comment = "Crisps food perfectly, very easy to use."
                },
                new ReviewModel
                {
                    Id = "review-prod-023-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-023",
                    Score = 4,
                    Title = "Great fryer",
                    CreatedAt = DateTimeOffset.Parse("2025-02-28T12:20:00+00:00"),
                    Comment = "Good results, just a bit loud."
                },
                new ReviewModel
                {
                    Id = "review-prod-023-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-023",
                    Score = 5,
                    Title = "Amazing",
                    CreatedAt = DateTimeOffset.Parse("2025-03-29T18:45:00+00:00"),
                    Comment = "Cooks fast and tastes great."
                },
                new ReviewModel
                {
                    Id = "review-prod-024-1",
                    ReviewerId = "user-0001",
                    ProductId = "prod-024",
                    Score = 4,
                    Title = "Nice mat",
                    CreatedAt = DateTimeOffset.Parse("2025-01-27T14:05:00+00:00"),
                    Comment = "Good grip and thickness, a bit slippery on wood."
                },
                new ReviewModel
                {
                    Id = "review-prod-024-2",
                    ReviewerId = "user-0002",
                    ProductId = "prod-024",
                    Score = 4,
                    Title = "Good mat",
                    CreatedAt = DateTimeOffset.Parse("2025-02-02T15:20:00+00:00"),
                    Comment = "Comfortable and easy to clean."
                },
                new ReviewModel
                {
                    Id = "review-prod-024-3",
                    ReviewerId = "user-0003",
                    ProductId = "prod-024",
                    Score = 5,
                    Title = "Perfect",
                    CreatedAt = DateTimeOffset.Parse("2025-03-01T10:40:00+00:00"),
                    Comment = "Great mat for yoga."
                },
                new ReviewModel
                {
                    Id = "review-prod-025-1",
                    ReviewerId = "user-0004",
                    ProductId = "prod-025",
                    Score = 4,
                    Title = "Comfortable running shoes",
                    CreatedAt = DateTimeOffset.Parse("2025-01-29T12:30:00+00:00"),
                    Comment = "Good cushioning, true to size."
                },
                new ReviewModel
                {
                    Id = "review-prod-025-2",
                    ReviewerId = "user-0005",
                    ProductId = "prod-025",
                    Score = 3,
                    Title = "Average shoes",
                    CreatedAt = DateTimeOffset.Parse("2025-02-03T17:00:00+00:00"),
                    Comment = "Comfort is ok, but not great for long runs."
                },
                new ReviewModel
                {
                    Id = "review-prod-025-3",
                    ReviewerId = "user-0006",
                    ProductId = "prod-025",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-03-04T09:10:00+00:00"),
                    Comment = "Nice shoes for the price."
                },
                new ReviewModel
                {
                    Id = "review-prod-026-1",
                    ReviewerId = "user-0007",
                    ProductId = "prod-026",
                    Score = 5,
                    Title = "Great backpack",
                    CreatedAt = DateTimeOffset.Parse("2025-01-31T08:55:00+00:00"),
                    Comment = "Very durable and comfortable to carry."
                },
                new ReviewModel
                {
                    Id = "review-prod-026-2",
                    ReviewerId = "user-0001",
                    ProductId = "prod-026",
                    Score = 4,
                    Title = "Good backpack",
                    CreatedAt = DateTimeOffset.Parse("2025-02-05T11:40:00+00:00"),
                    Comment = "Spacious and sturdy."
                },
                new ReviewModel
                {
                    Id = "review-prod-026-3",
                    ReviewerId = "user-0002",
                    ProductId = "prod-026",
                    Score = 5,
                    Title = "Perfect for travel",
                    CreatedAt = DateTimeOffset.Parse("2025-03-06T13:50:00+00:00"),
                    Comment = "Great compartments and comfortable straps."
                },
                new ReviewModel
                {
                    Id = "review-prod-027-1",
                    ReviewerId = "user-0003",
                    ProductId = "prod-027",
                    Score = 4,
                    Title = "Keeps water cold",
                    CreatedAt = DateTimeOffset.Parse("2025-01-02T09:25:00+00:00"),
                    Comment = "Good insulation and easy to clean."
                },
                new ReviewModel
                {
                    Id = "review-prod-027-2",
                    ReviewerId = "user-0004",
                    ProductId = "prod-027",
                    Score = 4,
                    Title = "Nice bottle",
                    CreatedAt = DateTimeOffset.Parse("2025-02-06T12:30:00+00:00"),
                    Comment = "Good size and keeps water cold."
                },
                new ReviewModel
                {
                    Id = "review-prod-027-3",
                    ReviewerId = "user-0005",
                    ProductId = "prod-027",
                    Score = 5,
                    Title = "Best bottle",
                    CreatedAt = DateTimeOffset.Parse("2025-03-07T15:15:00+00:00"),
                    Comment = "Very good insulation and easy to carry."
                },
                new ReviewModel
                {
                    Id = "review-prod-028-1",
                    ReviewerId = "user-0006",
                    ProductId = "prod-028",
                    Score = 5,
                    Title = "Great sunglasses",
                    CreatedAt = DateTimeOffset.Parse("2025-01-04T13:05:00+00:00"),
                    Comment = "Very good quality and looks great."
                },
                new ReviewModel
                {
                    Id = "review-prod-028-2",
                    ReviewerId = "user-0007",
                    ProductId = "prod-028",
                    Score = 4,
                    Title = "Nice sunglasses",
                    CreatedAt = DateTimeOffset.Parse("2025-02-08T14:20:00+00:00"),
                    Comment = "Good fit and looks nice."
                },
                new ReviewModel
                {
                    Id = "review-prod-028-3",
                    ReviewerId = "user-0001",
                    ProductId = "prod-028",
                    Score = 4,
                    Title = "Good value",
                    CreatedAt = DateTimeOffset.Parse("2025-03-09T11:35:00+00:00"),
                    Comment = "Great sunglasses for the price."
                },
                new ReviewModel
                {
                    Id = "review-prod-029-1",
                    ReviewerId = "user-0002",
                    ProductId = "prod-029",
                    Score = 4,
                    Title = "Good smartwatch",
                    CreatedAt = DateTimeOffset.Parse("2025-01-06T10:45:00+00:00"),
                    Comment = "Lots of features, battery lasts long."
                },
                new ReviewModel
                {
                    Id = "review-prod-029-2",
                    ReviewerId = "user-0003",
                    ProductId = "prod-029",
                    Score = 5,
                    Title = "Very good",
                    CreatedAt = DateTimeOffset.Parse("2025-02-10T16:00:00+00:00"),
                    Comment = "Great value and features."
                },
                new ReviewModel
                {
                    Id = "review-prod-029-3",
                    ReviewerId = "user-0004",
                    ProductId = "prod-029",
                    Score = 4,
                    Title = "Nice watch",
                    CreatedAt = DateTimeOffset.Parse("2025-03-12T12:10:00+00:00"),
                    Comment = "Works well, just a bit bulky."
                },
                new ReviewModel
                {
                    Id = "review-prod-030-1",
                    ReviewerId = "user-0005",
                    ProductId = "prod-030",
                    Score = 3,
                    Title = "Nice poster",
                    CreatedAt = DateTimeOffset.Parse("2025-01-08T11:20:00+00:00"),
                    Comment = "Looks good, but the paper quality could be better."
                },
                new ReviewModel
                {
                    Id = "review-prod-030-2",
                    ReviewerId = "user-0006",
                    ProductId = "prod-030",
                    Score = 4,
                    Title = "Good art",
                    CreatedAt = DateTimeOffset.Parse("2025-02-12T13:40:00+00:00"),
                    Comment = "Looks great on the wall."
                },
                new ReviewModel
                {
                    Id = "review-prod-030-3",
                    ReviewerId = "user-0007",
                    ProductId = "prod-030",
                    Score = 4,
                    Title = "Good poster",
                    CreatedAt = DateTimeOffset.Parse("2025-03-14T15:50:00+00:00"),
                    Comment = "Nice design, good price."
                }
            });

            db.SaveChanges();
        }
    }
}
