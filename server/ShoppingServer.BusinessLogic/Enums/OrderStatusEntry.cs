using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Enums
{
    public enum OrderStatus
    {
        None,

        Processing,

        Sent,

        InDelivery,

        Delivered,

        Cancelled,
    }
}
