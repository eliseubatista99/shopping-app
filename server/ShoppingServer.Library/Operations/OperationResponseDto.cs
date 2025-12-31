using ShoppingServer.Library.Entities;
using System.Diagnostics.CodeAnalysis;


namespace ShoppingServer.Library.Operations
{
    [ExcludeFromCodeCoverage]
    public class OperationResponseDto<TOutput> where TOutput : OperationOutputDto
    {
        public TOutput? Data { get; set; }
        public OutputMetadataDto? Metadata { get; set; }

        public OperationResponseDto()
        {

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
    }
}
