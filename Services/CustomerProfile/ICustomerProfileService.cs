using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface ICustomerProfileService
    {
         Task InsertAsync(CustomerProfile customerProfile);
         Task<CustomerProfile> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(CustomerProfile customerProfile);
         void Delete(CustomerProfile customerProfile);
    }
}