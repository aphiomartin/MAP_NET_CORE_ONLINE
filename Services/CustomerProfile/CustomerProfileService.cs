using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public class CustomerProfileService : ICustomerProfileService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<CustomerProfile> customerRepo;
        public CustomerProfileService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.customerRepo = this.unitOfWork.GetRepository<CustomerProfile>();
        }
        public async Task InsertAsync(CustomerProfile customerProfile)
        {
            await customerRepo.InsertAsync(customerProfile);
        }

        public async Task<CustomerProfile> FindAsync(int id)
        {
            return await customerRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(CustomerProfile customerProfile)
        {
            customerRepo.Update(customerProfile);
        }

        public void Delete(CustomerProfile customerProfile)
        {
            customerRepo.Delete(customerProfile);
        }

        public async Task<CustomerProfile> FindByRequestAsync(int id)
        {
            return await customerRepo.GetFirstOrDefaultAsync(predicate: x => x.RequestId == id);
        }
    }
}