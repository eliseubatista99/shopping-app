using ShoppingServer.BusinessLogic.Attributes;
using System.Diagnostics.CodeAnalysis;
using System.Linq.Expressions;


namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class OperationOutput<TOutput>
    {
        public TOutput? Data { get; set; }
        public OutputMetadataDto? Metadata { get; set; }

        public OperationOutput()
        {

        }

        public OperationOutput(TOutput data, OutputMetadataDto metadata)
        {
            Data = data;
            Metadata = metadata;
        }

        public void AddError(ErrorDto error)
        {
            AddErrors(new List<ErrorDto> { error });
        }

        public void AddErrors(List<ErrorDto> errors)
        {
            if (this.Metadata == null) {
                this.Metadata = new OutputMetadataDto();
            }

            this.Metadata.AddErrors(errors);
        }

        public static TResponse AsResponse<TResponse>(OperationOutput<TOutput> operationOut)
            where TResponse : OperationOutput<TOutput>, new()
        {
            return new TResponse
            {
                Data = operationOut.Data,
                Metadata = operationOut.Metadata,
            };
        }

        public static async Task<TResponse> AsResponse<TResponse>(Task<OperationOutput<TOutput>> operationOut)
            where TResponse : OperationOutput<TOutput>, new()
        {
            var res = await operationOut;

            if (res is null)
            {
                return new TResponse
                {
                    Data = default,
                    Metadata = new OutputMetadataDto(),
                };
            }

            return AsResponse<TResponse>(res);
        }
    }
}
