using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.Library.Operations
{
    public class OperationBase<TInput, TOutput> 
        where TInput : OperationInputDto
        where TOutput : OperationOutputDto
    {
        protected ControllerBase controller;

        protected TInput input;

        protected OperationResponseDto<TOutput> output;

        public OperationBase(ControllerBase _controller)
        {
            controller = _controller;

            output = new OperationResponseDto<TOutput> { 
                Metadata = new OutputMetadataDto
                {
                    Success = true,
                    Errors = null,
                }
            };
        }

        public Task<OperationResponseDto<TOutput>> Execute(TInput _input)
        {
            this.input = _input;
            return Execute();
        }

        protected virtual Task HandleExecution()
        {
            return Task.CompletedTask;
        }

        public async Task<OperationResponseDto<TOutput>> Execute()
        {
            controller.Response.StatusCode = StatusCodes.Status200OK;
            await HandleExecution();

            if (output is null)
            {
                return new OperationResponseDto<TOutput>
                {
                    Data = default,
                    Metadata = new OutputMetadataDto(),
                };
            }

            return output;
        }

        public async Task<TResponse> Execute<TResponse>()
            where TResponse : OperationResponseDto<TOutput>, new()
        {
            var res = await Execute();

            return new TResponse
            {
                Data = res.Data,
                Metadata = res.Metadata,
            };
        }

        public Task<TResponse> Execute<TResponse>(TInput _input)
            where TResponse : OperationResponseDto<TOutput>, new()
        {
            this.input = _input;

            return Execute<TResponse>();
        }
    }
}
