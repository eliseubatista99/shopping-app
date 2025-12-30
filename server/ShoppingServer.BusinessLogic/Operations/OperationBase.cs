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

        public async Task<OperationOutput<TOutput>> Execute()
        {
            controller.Response.StatusCode = StatusCodes.Status200OK;
            await HandleExecution();

            return output;
        }

        protected virtual Task HandleExecution()
        {
            return Task.CompletedTask;
        }
    }
}
