namespace ShoppingServer.Database.Seed
{
    public static class SeedHelper
    {
        public static byte[] ReadImage(string path)
        {
            return File.Exists(path) ? File.ReadAllBytes(path) : new byte[0];
        }

        public static string ReadText(string path)
        {
            if (!File.Exists(path))
                return string.Empty;

            var content = File.ReadAllText(path).Trim();

            try
            {
                Convert.FromBase64String(content);
                return content;
            }
            catch
            {
                return string.Empty;
            }
        }

    }
}
