namespace ShoppingServer.BusinessLogic.Helpers
{
    public static class CartHelper
    {
        public static List<(string ProductId, int Quantity)> GetProductsWithQuantity(List<string> productIds)
        {
            return productIds.GroupBy(i => i).Select(g => (g.Key, g.Count())).ToList();
        }
    }
}
