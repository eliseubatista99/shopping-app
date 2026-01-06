using Database.PostgreSql.Repositories;

namespace ShoppingServer.Database.Repositories
{
    public class BaseAppRepository<T> : BaseRepository<T> where T : class
    {
        public BaseAppRepository(AppDbContext context) : base(context)
        {
        }
    }
}
