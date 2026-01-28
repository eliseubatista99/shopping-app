namespace ShoppingApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var program = new ProgramBuilder();

            program.Build(args);

            program.Run();
        }
    }
}
