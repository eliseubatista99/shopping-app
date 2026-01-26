using Microsoft.AspNetCore.Http;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.BusinessLogic.Helpers;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetProductReviewsOperation : AppOperationBase<GetProductReviewsOperationInputDto, GetProductReviewsOperationOutputDto>
    {
        private IReviewsRepository reviewsRepository;
        private IProductsRepository productsRepository;

        public GetProductReviewsOperation(IExecutionContext _context) : base(_context)
        {
            reviewsRepository = ExecutionContext.GetService<IReviewsRepository>();
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.ProductId == null && input?.ReviewId == null && input?.AuthorId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("ProductId, AuthorId and ReviewId cannot all be empty"));
                return;
            }

            output.Data = new GetProductReviewsOperationOutputDto();

            var reviewsInDb = await reviewsRepository.SearchReviews(input.ProductId, input.ReviewId, input.AuthorId, input.FilterByRating, input.Page, input.PageSize);
            var reviews = await ObjectsFactory.BuildReviews(reviewsInDb.Data, this.ExecutionContext);



            output.Data = new GetProductReviewsOperationOutputDto
            {
                Reviews = reviews,
                HasMorePages = reviewsInDb.HasMorePages,
            };

            if (input.ProductId != null)
            {
                var productInDb = await productsRepository.GetByIdAsync(input.ProductId, false);
                var product = await ObjectsFactory.BuildProductDetails(productInDb, this.ExecutionContext);
                var scoreDetails = await reviewsRepository.GetProductScoreDetails(input.ProductId);

                output.Data.ProductId = product?.Id;
                output.Data.ProductName = product?.Name;
                output.Data.AverageScore = scoreDetails.AverageScore;
                output.Data.ReviewsCount = scoreDetails.reviewsCount;
                output.Data.Scores = scoreDetails.ScoresCount.Select(s => new ScoreCountDto { Score = s.score, Count = s.count }).ToList();
            }

            if (input?.SortMode != null)
            {
                output.Data.Reviews = SortReviews(input.SortMode ?? SortMode.None, output.Data.Reviews);
            }
        }

        private static List<ReviewDto> SortReviews(SortMode sortMode, List<ReviewDto> reviews)
        {
            switch (sortMode)
            {
                case SortMode.LowToHighScore:
                    return reviews.OrderBy(p => p.Score).ToList();
                case SortMode.HightToLowScore:
                    return reviews.OrderByDescending(p => p.Score).ToList();
                case SortMode.OldToNew:
                    return reviews.OrderBy(p => p.CreatedAt).ToList();
                case SortMode.NewToOld:
                    return reviews.OrderByDescending(p => p.CreatedAt).ToList();
                default:
                    return reviews;
            }
        }
    }
}

