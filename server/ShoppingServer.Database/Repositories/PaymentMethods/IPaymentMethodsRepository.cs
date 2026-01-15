using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IPaymentMethodsRepository : IRepository<PaymentMethodModel>
    {
        public Task<List<PaymentMethodModel>> GetByUserId(string userId);

        public Task<bool> AddItemAsync(PaymentMethodModel item, bool saveChanges = true);

        public Task<bool> SetDefault(string id, bool saveChanges = true);

        public Task<bool> DeleteById(string id, bool saveChanges = true);


    }
}
