using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class WriteReviewOperation : AppOperationBase<WriteReviewOperationInputDto, OperationOutputDto>
    {
        private IProductsRepository productsRepository;
        private IReviewsRepository reviewsRepository;

        public WriteReviewOperation(BaseAppController _controller) : base(_controller)
        {
            productsRepository = ExecutionContext.GetService<IProductsRepository>();
            reviewsRepository = ExecutionContext.GetService<IReviewsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            if (input?.ProductId == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("ProductId cannot be empty"));
                return;
            }

            var productInDb = await productsRepository.GetByIdAsync(input.ProductId);

            if (productInDb == null)
            {
                SetStatusCode(StatusCodes.Status404NotFound);
                output.AddError(new ErrorDto("Product not found"));
                return;
            }

            var userId = this.GetUserIdFromToken();

            var review = new ReviewModel
            {
                Id = Guid.NewGuid().ToString(),
                ReviewerId = userId,
                ProductId = input.ProductId,
                Score = input.Score,
                Title = input.Title,
                CreatedAt = DateTimeOffset.UtcNow,
                Comment = input.Description,
            };

            var success = await reviewsRepository.AddAsync(review);

            if (!success)
            {
                SetStatusCode(StatusCodes.Status500InternalServerError);
                output.AddError(new ErrorDto("Failed to add review"));
                return;
            }

            output.Data = new OperationOutputDto
            {
            };
        }
    }
}
