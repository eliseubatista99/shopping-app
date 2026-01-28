namespace ShoppingServer.Database.Seed
{
    public static class SeedHelper
    {
        public static byte[] ReadImage(string relativePath)
        {
            var path = Path.Combine(AppContext.BaseDirectory, relativePath);

            if (!File.Exists(path))
                return new byte[0];


            try
            {
                return File.ReadAllBytes(path);
            }
            catch
            {
                return new byte[0];
            }
        }

        public static string ReadText(string relativePath)
        {
            var path = Path.Combine(AppContext.BaseDirectory, relativePath);

            if (!File.Exists(path))
                return string.Empty;

            try
            {
                var content = File.ReadAllText(path).Trim();

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
