namespace ShoppingServer.BusinessLogic.Constants
{
    public static class ShoppingServerConstants
    {
        public const string ORDER_STATUS_PROCESSING = "Processing";
        public const string ORDER_STATUS_SENT = "Sent";
        public const string ORDER_STATUS_IN_DELIVERY = "InDelivery";
        public const string ORDER_STATUS_DELIVERED = "Delivered";
        public const string ORDER_STATUS_CANCELLED = "Cancelled";

        public const string PAYMENT_METHOD_BANK = "Bank";
        public const string PAYMENT_METHOD_CARD = "Card";

        public const int DELIVERY_STANDARD_DAYS = 8;
        public const int DELIVERY_FAST_SHIPPING_DAYS = 3;
        public const int DELIVERY_DAYS_GAP = 6;
        public const int DELIVERY_DAYS_FAST_GAP = 3;

    }
}
