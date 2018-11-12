using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IMIDService
    {
         Task InsertAsync(MID mid);
         Task<MID> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(MID mid);
         void Delete(MID mid);
    }
}