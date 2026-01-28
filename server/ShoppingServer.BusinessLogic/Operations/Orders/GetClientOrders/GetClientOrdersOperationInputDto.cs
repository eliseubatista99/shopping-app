using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.Library.Operations;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class GetClientOrdersOperationInputDto : OperationPaginatedInputDto
    {
        public string? OrderId { get; set; }

        public string? FilterByText { get; set; }

        public OrderStatus? FilterByStatus { get; set; }

        public SortMode? SortMode { get; set; }

        public DateTimeOffset? FilterByStartDate { get; set; }

        public DateTimeOffset? FilterByEndDate { get; set; }

    }
}
