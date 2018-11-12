using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IOIFService
    {
         Task InsertAsync(OIF oif);
         Task<OIF> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(OIF oif);
         void Delete(OIF oif);
    }
}