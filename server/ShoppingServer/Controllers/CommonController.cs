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
            getClientInfoOperation = new GetClientInfoOperation(executionContext);
            forYouOperation = new ForYouOperation(executionContext);
            getDocumentOperation = new GetDocumentOperation(executionContext);
            updateClientInfoOperation = new UpdateClientInfoOperation(executionContext);
        }

        [HttpGet("/api/GetClientInfo")]
        [Authorize]
        public async Task<GetClientInfoResponseDto> GetClientInfo()
        {
            var response = await getClientInfoOperation.Execute<GetClientInfoResponseDto>();
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/ForYou")]
        [Authorize]
        public async Task<ForYouResponseDto> ForYou()
        {
            var response = await forYouOperation.Execute<ForYouResponseDto>();
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpGet("/api/GetDocument")]
        [Authorize]
        public async Task<GetDocumentResponseDto> GetCart([FromQuery] GetDocumentOperationInputDto input)
        {
            var response = await getDocumentOperation.Execute<GetDocumentResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

        [HttpPatch("/api/UpdateClientInfo")]
        [Authorize]
        public async Task<UpdateClientInfoResponseDto> UpdateClientInfo([FromBody] UpdateClientInfoOperationInputDto input)
        {
            var response = await updateClientInfoOperation.Execute<UpdateClientInfoResponseDto>(input);
            this.Response.StatusCode = response.StatusCode;

            return response;
        }

    }
}
