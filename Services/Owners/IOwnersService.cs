using System.Collections.Generic;
using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IOwnersService
    {
         Task InsertAsync(Owners owner);
         Task<Owners> FindAsync(int id);
         Task<IPagedList<Owners>> FindByCustomerAsync(int id);
         Task SaveChangesAsync();
         void Update(Owners owner);
         void Delete(Owners owner);
    }
}