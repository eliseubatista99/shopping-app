namespace ShoppingServer.Library
{
    public interface IExecutionContext
    {
        public T GetService<T>() where T : notnull;
    }
}
