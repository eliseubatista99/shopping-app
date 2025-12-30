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
