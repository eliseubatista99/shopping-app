using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommonController : ControllerBase
    {
        private ForYouOperation forYouOperation;
        private GetDocumentOperation getDocumentOperation;
        private UpdateClientInfoOperation updateClientInfoOperation;

        public CommonController()
        {
            forYouOperation = new ForYouOperation(this);
            getDocumentOperation = new GetDocumentOperation(this);
            updateClientInfoOperation = new UpdateClientInfoOperation(this);
        }

        [HttpPost("/api/ForYou")]
        public Task<OperationOutput<ForYouOperationOutputDto>> ForYou()
        {
            return forYouOperation.Execute(new ForYouOperationInputDto());
        }

        //[HttpGet("/api/GetDocument")]
        //public Task<OperationOutput<GetDocumentOperationOutputDto>> GetCart([FromQuery] string id)
        //{
        //    return getDocumentOperation.Execute(new GetDocumentOperationInputDto
        //    {
        //        Id = id,
        //    });
        //}

        [HttpGet("/api/GetDocument")]
        public Task<OperationOutput<GetDocumentOperationOutputDto>> GetCart([FromQuery] GetDocumentOperationInputDto input)
        {
            return getDocumentOperation.Execute(input);
        }

        [HttpPatch("/api/UpdateClientInfo")]
        public Task<OperationOutput<UpdateClientInfoOperationOutputDto>> UpdateClientInfo([FromBody] UpdateClientInfoOperationInputDto input)
        {
            return updateClientInfoOperation.Execute(input);
        }

    }
}
