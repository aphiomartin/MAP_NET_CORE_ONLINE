using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IOwnersService
    {
         Task InsertAsync(Owners owner);
         Task<Owners> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(Owners owner);
         void Delete(Owners owner);
    }
}