using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class CartsRepository : BaseAppRepository<CartModel>, ICartsRepository
    {
        public CartsRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<CartModel?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<bool> DeleteByIds(IEnumerable<string> ids, string userId, bool saveChanges = true)
        {
            return await DeleteAsync(i => ids.Contains(i.ProductId) && i.UserId == userId, saveChanges);
        }

        public Task<List<CartModel>> GetUserCart(string userId)
        {
            return this.ReadQuery().Where(I => I.UserId == userId).ToListAsync();
        }

        public async Task<bool> UpdateCartItems(IEnumerable<CartModel> items, string userId, bool saveChanges = true)
        {
            var success = false;

            foreach (var item in items)
            {
                success = await UpdateAsync(
                    filter: i => i.ProductId == item.ProductId && i.UserId == userId,
                    updateAction: entity =>
                    {
                        var item = items.FirstOrDefault(x => x.ProductId == entity.ProductId);

                        if (item != null)
                        {
                            entity.Quantity = item.Quantity;
                            entity.IsSelected = item.IsSelected;
                        }
                    },
                    saveChanges: false
                );
            }

            if (saveChanges && success)
            {
                return await SaveChangesAsync();
            }

            return success;
        }

        public async Task<bool> AddItemsAsync(IEnumerable<CartModel> items, string userId, bool saveChanges = true)
        {
            var userCart = await this.GetUserCart(userId);
            List<CartModel> itemsInDb = new List<CartModel>();
            List<CartModel> itemsNotInDb = new List<CartModel>();

            foreach (var newItem in items)
            {
                var entryInDb = userCart.Find(iDb => iDb.ProductId == newItem.ProductId);

                if (entryInDb == null)
                {
                    itemsNotInDb.Add(newItem);
                }
                else
                {
                    newItem.Quantity = entryInDb.Quantity + newItem.Quantity;
                    itemsInDb.Add(newItem);
                }
            }

            try
            {
                var success = await this.AddRangeAsync(itemsNotInDb, false);

                if (!success)
                {
                    return false;
                }

                success = await this.UpdateCartItems(itemsInDb, userId, false);

                if (!success)
                {
                    return false;
                }

                return await this.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}

