using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Attributes;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromSwagger]
    public class OperationBase<TInput, TOutput>
    {
        protected ControllerBase controller;

        protected TInput input;

        protected OperationOutput<TOutput> output;

        public OperationBase(ControllerBase _controller)
        {
            controller = _controller;

            output = new OperationOutput<TOutput> { 
                Metadata = new OutputMetadataDto
                {
                    Success = true,
                    Errors = null,
                }
            };
        }

        public Task<OperationOutput<TOutput>> Execute(TInput _input)
        {
            this.input = _input;
            return Execute();
        }

        protected virtual Task HandleExecution()
        {
            return Task.CompletedTask;
        }

        public async Task<OperationOutput<TOutput>> Execute()
        {
            controller.Response.StatusCode = StatusCodes.Status200OK;
            await HandleExecution();

            if (output is null)
            {
                return new OperationOutput<TOutput>
                {
                    Data = default,
                    Metadata = new OutputMetadataDto(),
                };
            }

            return output;
        }
        public async Task<TResponse> Execute<TResponse>(TInput _input)
            where TResponse : OperationOutput<TOutput>, new()
        {
            this.input = _input;

            var res = await Execute();

            return new TResponse
            {
                Data = res.Data,
                Metadata = res.Metadata,
            };
        }
    }
}
