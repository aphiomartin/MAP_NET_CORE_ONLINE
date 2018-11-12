using System.Threading.Tasks;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface ITerminalDetailsService
    {
         Task InsertAsync(TerminalDetails terminalDetails);
         Task<TerminalDetails> FindAsync(int id);
         Task SaveChangesAsync();
         void Update(TerminalDetails terminalDetails);
         void Delete(TerminalDetails terminalDetails);
    }
}