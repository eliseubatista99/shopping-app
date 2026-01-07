using ShoppingServer.Library;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class GetDocumentOperation : AppOperationBase<GetDocumentOperationInputDto, GetDocumentOperationOutputDto>
    {
        public GetDocumentOperation(BaseAppController _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new GetDocumentOperationOutputDto
            {

            };
        }
    }
}
