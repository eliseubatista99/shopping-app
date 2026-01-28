using ShoppingServer.BusinessLogic.Enums;
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class OrderStatusEntryDto
    {
        public required OrderStatus Status { get; set; }

        public required DateTimeOffset Date { get; set; }
    }
}
