using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library.Operations;
using ShoppingServer.Library.Entities;

namespace ShoppingServer.Controllers
{
    public class GetClientInfoResponseDto : OperationOutput<GetClientInfoOperationOutputDto>;
    public class ForYouResponseDto : OperationOutput<ForYouOperationOutputDto>;
    public class GetDocumentResponseDto : OperationOutput<GetDocumentOperationOutputDto>;
    public class UpdateClientInfoResponseDto : OperationOutput<UpdateClientInfoOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class CommonController : ControllerBase
    {
        private GetClientInfoOperation getClientInfoOperation;
        private ForYouOperation forYouOperation;
        private GetDocumentOperation getDocumentOperation;
        private UpdateClientInfoOperation updateClientInfoOperation;

        public CommonController()
        {
            getClientInfoOperation = new GetClientInfoOperation(this);
            forYouOperation = new ForYouOperation(this);
            getDocumentOperation = new GetDocumentOperation(this);
            updateClientInfoOperation = new UpdateClientInfoOperation(this);
        }

        [HttpGet("/api/GetClientInfo")]
        public Task<GetClientInfoResponseDto> GetClientInfo()
        {
            return getClientInfoOperation.Execute<GetClientInfoResponseDto>();
        }

        [HttpPost("/api/ForYou")]
        public Task<ForYouResponseDto> ForYou()
        {
            return forYouOperation.Execute<ForYouResponseDto>();
        }

        [HttpGet("/api/GetDocument")]
        public Task<GetDocumentResponseDto> GetCart([FromQuery] GetDocumentOperationInputDto input)
        {
            return getDocumentOperation.Execute<GetDocumentResponseDto>(input);
        }

        [HttpPatch("/api/UpdateClientInfo")]
        public Task<UpdateClientInfoResponseDto> UpdateClientInfo([FromBody] UpdateClientInfoOperationInputDto input)
        {
            return updateClientInfoOperation.Execute<UpdateClientInfoResponseDto>(input);
        }

    }
}
