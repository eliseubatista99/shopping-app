using Microsoft.AspNetCore.Http;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.Database.Repositories;
using ShoppingServer.Library;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetDocumentOperation : AppOperationBase<GetDocumentOperationInputDto, GetDocumentOperationOutputDto>
    {
        private IDocumentsRepository documentsRepository;

        public GetDocumentOperation(BaseAppController _controller) : base(_controller)
        {
            documentsRepository = this.ExecutionContext.GetService<IDocumentsRepository>();
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            var userId = this.GetUserIdFromToken();

            if (input?.Id == null)
            {
                SetStatusCode(StatusCodes.Status400BadRequest);
                output.AddError(new ErrorDto("Documetn Id cannot be empty"));
                return;
            }

            var documentInDb = await documentsRepository.GetByIdAsync(input.Id);


            output.Data = new GetDocumentOperationOutputDto
            {
                Document = documentInDb == null ? null : this.MapperProvider.Map<DocumentModel, DocumentDto>(documentInDb),
            };
        }
    }
}
