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

        protected virtual void LogOperationExecution()
        {
            var data = System.Text.Json.JsonSerializer.Serialize(new
            {
                Input = this.input,
                //Headers = controller?.Request.Headers,
            }, new System.Text.Json.JsonSerializerOptions { WriteIndented = true });

            Console.WriteLine($" Shopping App Server > {this.GetType().Name} > Executing request with > {data}");
        }

        protected virtual void LogOperationResponse()
        {
            var data = System.Text.Json.JsonSerializer.Serialize(new
            {
                Output = this.output,
            }, new System.Text.Json.JsonSerializerOptions { WriteIndented = true });

            Console.WriteLine($" Shopping App Server > {this.GetType().Name} > Executing responded with > {data}");
        }

        protected virtual Task HandleExecution()
        {
            return Task.CompletedTask;
        }

        public async Task<OperationResponseDto<TOutput>> Execute()
        {
            LogOperationExecution();

            controller.Response.StatusCode = StatusCodes.Status200OK;
            await HandleExecution();

            if (output is null)
            {
                output = new OperationResponseDto<TOutput>
                {
                    Data = default,
                    Metadata = new OutputMetadataDto(),
                };
            }

            LogOperationResponse();

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
