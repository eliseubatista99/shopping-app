using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<UserModel> Users => Set<UserModel>();
    public DbSet<TokenModel> Tokens => Set<TokenModel>();
    public DbSet<AddressModel> Addresses => Set<AddressModel>();
    public DbSet<PaymentMethodModel> PaymentMethods => Set<PaymentMethodModel>();
    public DbSet<SellerModel> Sellers => Set<SellerModel>();
    public DbSet<ProductVariantGroupModel> ProductVariants => Set<ProductVariantGroupModel>();
    public DbSet<ProductModel> Products => Set<ProductModel>();
    public DbSet<ProductImageModel> ProductImages => Set<ProductImageModel>();
    public DbSet<RelatedProductModel> RelatedProducts => Set<RelatedProductModel>();
    public DbSet<ProductCombinationModel> ProductCombinations => Set<ProductCombinationModel>();
    public DbSet<CartModel> Carts => Set<CartModel>();
    public DbSet<OrdersStatusModel> OrdersStatus => Set<OrdersStatusModel>();
    public DbSet<OrderModel> Orders => Set<OrderModel>();
    public DbSet<OrderProductModel> OrderProducts => Set<OrderProductModel>();
    public DbSet<DocumentModel> Documents => Set<DocumentModel>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.Entity<UserModel>(entity =>
        //{
        //    entity.HasKey(e => e.Id);

        //    entity.Property(e => e.Id)
        //          .ValueGeneratedNever(); // Dont auto generate id
        //});

        modelBuilder.Entity<RelatedProductModel>(entity =>
        {
            entity.HasKey(rp => new { rp.ProductId, rp.RelatedProductId });

            entity.HasOne<ProductModel>()
                  .WithMany()
                  .HasForeignKey(rp => rp.ProductId)
                  .OnDelete(DeleteBehavior.Cascade);

            entity.HasOne<ProductModel>()
                  .WithMany()
                  .HasForeignKey(rp => rp.RelatedProductId)
                  .OnDelete(DeleteBehavior.Cascade);

            entity.ToTable(tb => tb.HasCheckConstraint(
                "CK_RelatedProduct_SelfReference",
                "\"ProductId\" <> \"RelatedProductId\""
            ));
        });

        modelBuilder.Entity<ProductCombinationModel>(entity =>
        {
            entity.HasKey(pc => new { pc.ProductId, pc.CombinedProductId });

            entity.HasOne<ProductModel>()
                  .WithMany()
                  .HasForeignKey(pc => pc.ProductId)
                  .OnDelete(DeleteBehavior.Cascade);

            entity.HasOne<ProductModel>()
                  .WithMany()
                  .HasForeignKey(pc => pc.CombinedProductId)
                  .OnDelete(DeleteBehavior.Cascade);

            entity.ToTable(tb => tb.HasCheckConstraint(
                "CK_ProductCombination_SelfReference",
                "\"ProductId\" <> \"CombinedProductId\""
            ));
        });

        modelBuilder.Entity<OrderProductModel>(entity =>
        {
            entity.HasKey(pc => new { pc.ProductId, pc.OrderId });

            entity.HasOne<ProductModel>()
                  .WithMany()
                  .HasForeignKey(pc => pc.ProductId)
                  .OnDelete(DeleteBehavior.Cascade);

            entity.HasOne<OrderModel>()
                  .WithMany()
                  .HasForeignKey(pc => pc.OrderId)
                  .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
