using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class PaymentMethodsRepository : BaseAppRepository<PaymentMethodModel>, IPaymentMethodsRepository
    {
        public PaymentMethodsRepository(AppDbContext context) : base(context)
        {
        }

        public Task<PaymentMethodModel?> GetByIdAsync(string id, bool onlyActive = true)
        {
            var query = this.ReadQuery();

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.FirstOrDefaultAsync(i => i.Id == id);
        }

        public Task<List<PaymentMethodModel>> GetByUserId(string userId, bool onlyActive = true)
        {
            var query = this.ReadQuery().Where(i => i.UserId == userId);

            if (onlyActive)
            {
                query = query.Where(i => i.IsDbActive);
            }

            return query.ToListAsync();
        }

        public async Task<bool> SetDefault(string id, bool saveChanges = true)
        {
            try
            {
                var success = false;

                success = await UpdateAsync(
                    filter: i => i.IsDefault == true,
                    updateAction: entity =>
                    {
                        entity.IsDefault = false;
                    },
                    saveChanges: false
                );

                if (!success)
                {
                    return false;
                }

                success = await UpdateAsync(
                     filter: i => i.Id == id,
                     updateAction: entity =>
                     {
                         entity.IsDefault = true;
                     },
                     saveChanges: false
                 );

                if (!success)
                {
                    return false;
                }

                if (saveChanges)
                {
                    return await this.SaveChangesAsync();
                }

                return success;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> AddItemAsync(PaymentMethodModel item, bool saveChanges = true)
        {
            try
            {
                var success = false;

                success = await AddAsync(item);

                if (!success)
                {
                    return false;
                }

                if (item.IsDefault.GetValueOrDefault())
                {
                    success = await SetDefault(item.Id, false);

                    if (!success)
                    {
                        return false;
                    }
                }

                if (saveChanges)
                {
                    return await this.SaveChangesAsync();
                }

                return success;
            }
            catch (Exception)
            {
                return false;
            }


        }

        public Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return DeleteAsync(i => i.Id == id, saveChanges);
        }
    }
}

