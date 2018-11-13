using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IPOSService
    {
         Task InsertAsync(POS pos);
         Task<POS> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(POS pos);
         void Delete(POS pos);
    }
}