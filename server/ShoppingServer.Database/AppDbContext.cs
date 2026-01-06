using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<UserEntry> Users => Set<UserEntry>();
    public DbSet<TokenEntry> Tokens => Set<TokenEntry>();
}
