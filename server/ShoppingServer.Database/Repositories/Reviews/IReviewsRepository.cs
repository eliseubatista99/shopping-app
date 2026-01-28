using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IReviewsRepository : IRepository<ReviewModel>
    {
        public Task<ReviewModel?> GetLastReview(string userId);

        public Task<List<ReviewModel>> GetByUserId(string userId);

        public Task<(List<ReviewModel> Data, bool HasMorePages)> SearchReviews(
            string? productId = null,
            string? reviewId = null,
            string? authorId = null,
            decimal? filterByRating = null,
            int? page = 1,
            int? pageSize = 10);

        public Task<List<ReviewModel>> GetByProductIds(string userId, IEnumerable<string> productIds);

        public Task<(decimal AverageScore, List<(int score, int count)> ScoresCount, int reviewsCount)> GetProductScoreDetails(string productId);
    }
}
