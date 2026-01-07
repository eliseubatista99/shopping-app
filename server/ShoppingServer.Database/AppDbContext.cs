using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<UserModel> Users => Set<UserModel>();
    public DbSet<TokenModel> Tokens => Set<TokenModel>();
    public DbSet<AddressModel> Addresses => Set<AddressModel>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserModel>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id)
                  .ValueGeneratedNever(); // Dont auto generate id
        });
    }
}
