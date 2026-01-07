using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;
using ShoppingServer.Library;
using ShoppingServer.Library.Operations;

namespace ShoppingServer.Controllers
{
    public class GetClientInfoResponseDto : OperationResponseDto<GetClientInfoOperationOutputDto>;
    public class ForYouResponseDto : OperationResponseDto<ForYouOperationOutputDto>;
    public class GetDocumentResponseDto : OperationResponseDto<GetDocumentOperationOutputDto>;
    public class UpdateClientInfoResponseDto : OperationResponseDto<UpdateClientInfoOperationOutputDto>;

    [ApiController]
    [Route("[controller]")]
    public class CommonController : BaseAppController
    {
        private GetClientInfoOperation getClientInfoOperation;
        private ForYouOperation forYouOperation;
        private GetDocumentOperation getDocumentOperation;
        private UpdateClientInfoOperation updateClientInfoOperation;

        public CommonController(IExecutionContext executionContext) : base(executionContext)
        {
            getClientInfoOperation = new GetClientInfoOperation(this);
            forYouOperation = new ForYouOperation(this);
            getDocumentOperation = new GetDocumentOperation(this);
            updateClientInfoOperation = new UpdateClientInfoOperation(this);
        }

        [HttpGet("/api/GetClientInfo")]
        [Authorize]
        public Task<GetClientInfoResponseDto> GetClientInfo()
        {
            return getClientInfoOperation.Execute<GetClientInfoResponseDto>();
        }

        [HttpGet("/api/ForYou")]
        [Authorize]
        public Task<ForYouResponseDto> ForYou()
        {
            return forYouOperation.Execute<ForYouResponseDto>();
        }

        [HttpGet("/api/GetDocument")]
        [Authorize]
        public Task<GetDocumentResponseDto> GetCart([FromQuery] GetDocumentOperationInputDto input)
        {
            return getDocumentOperation.Execute<GetDocumentResponseDto>(input);
        }

        [HttpPatch("/api/UpdateClientInfo")]
        [Authorize]
        public Task<UpdateClientInfoResponseDto> UpdateClientInfo([FromBody] UpdateClientInfoOperationInputDto input)
        {
            return updateClientInfoOperation.Execute<UpdateClientInfoResponseDto>(input);
        }

    }
}
