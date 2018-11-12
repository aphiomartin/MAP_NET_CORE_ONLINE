using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface ISignatoriesService
    {
         Task InsertAsync(Signatories signatory);
         Task<Signatories> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(Signatories signatory);
         void Delete(Signatories signatory);
    }
}