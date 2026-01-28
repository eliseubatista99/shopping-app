using Database.PostgreSql.Extensions;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ReviewsRepository : BaseAppRepository<ReviewModel>, IReviewsRepository
    {
        public ReviewsRepository(AppDbContext context) : base(context)
        {
        }

        public Task<ReviewModel?> GetLastReview(string userId)
        {
            return this.ReadQuery().OrderByDescending(r => r.CreatedAt).FirstOrDefaultAsync(o => o.ReviewerId == userId);
        }

        public Task<List<ReviewModel>> GetByUserId(string userId)
        {
            return this.ReadQuery()
                .Where(r => r.ReviewerId == userId)
                .ToListAsync();
        }

        public Task<(List<ReviewModel> Data, bool HasMorePages)> SearchReviews(
            string? productId = null,
            string? reviewId = null,
            string? authorId = null,
            decimal? filterByRating = null,
            int? page = 1,
            int? pageSize = 10)
        {
            var query = this.ReadQuery();

            if (!string.IsNullOrEmpty(productId))
            {
                query = query.Where(p => p.ProductId == productId);
            }

            if (!string.IsNullOrEmpty(reviewId))
            {
                query = query.Where(p => p.Id == reviewId);
            }

            if (!string.IsNullOrEmpty(authorId))
            {
                query = query.Where(p => p.ReviewerId == authorId);
            }

            if (filterByRating != null)
            {
                query = query.Where(p => p.Score == filterByRating);
            }

            query.OrderByDescending(o => o.CreatedAt);

            return query.ExecutePaginatedRead(page, pageSize);
        }

        public Task<List<ReviewModel>> GetByProductIds(string userId, IEnumerable<string> productIds)
        {
            // Find all reviews with the specified product Ids
            return this.ReadQuery()
                .Where(r => r.ReviewerId == userId && productIds.Contains(r.ProductId))
                .ToListAsync();
        }

        public async Task<(decimal AverageScore, List<(int score, int count)> ScoresCount, int reviewsCount)> GetProductScoreDetails(string productId)
        {
            var result = await this.ReadQuery()
                .Where(r => r.ProductId == productId)
                .GroupBy(_ => 1)
                .Select(g => new
                {
                    // Makes sure the score is rounded to the nearest 0.5
                    AverageScore = (decimal)(Math.Round(g.Average(r => r.Score) * 2, MidpointRounding.AwayFromZero) / 2),
                    Score5Count = g.Count(r => r.Score == 5),
                    Score4Count = g.Count(r => r.Score == 4),
                    Score3Count = g.Count(r => r.Score == 3),
                    Score2Count = g.Count(r => r.Score == 2),
                    Score1Count = g.Count(r => r.Score == 1),
                    TotalReviews = g.Count()
                })
                .FirstOrDefaultAsync();

            var scoresCount = new List<(int score, int count)>
            {
                new (1, result?.Score1Count ?? 0),
                new (2, result?.Score2Count ?? 0),
                new (3, result?.Score3Count ?? 0),
                new (4, result?.Score4Count ?? 0),
                new (5, result?.Score5Count ?? 0),
            };

            return (result?.AverageScore ?? 0, scoresCount, result?.TotalReviews ?? 0);
        }
    }
}

