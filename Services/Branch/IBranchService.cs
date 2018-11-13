using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IBranchService
    {
         Task InsertAsync(Branch branch);
         Task<Branch> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(Branch branch);
         void Delete(Branch branch);
    }
}