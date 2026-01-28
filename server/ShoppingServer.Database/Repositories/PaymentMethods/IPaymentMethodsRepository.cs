using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface IPaymentMethodsRepository : IRepository<PaymentMethodModel>
    {
        Task<PaymentMethodModel?> GetByIdAsync(string id, bool onlyActive = true);

        public Task<List<PaymentMethodModel>> GetByUserId(string userId, bool onlyActive = true);

        public Task<bool> AddItemAsync(PaymentMethodModel item, bool saveChanges = true);

        public Task<bool> SetDefault(string id, bool saveChanges = true);

        public Task<bool> DeleteById(string id, bool saveChanges = true);


    }
}
