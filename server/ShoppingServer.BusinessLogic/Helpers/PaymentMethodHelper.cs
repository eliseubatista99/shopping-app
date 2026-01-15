namespace ShoppingServer.BusinessLogic.Helpers
{
    public static class PaymentMethodHelper
    {
        public static string MaskCardNumber(string? cardNumber)
        {
            return cardNumber ?? string.Empty;
        }
    }
}
