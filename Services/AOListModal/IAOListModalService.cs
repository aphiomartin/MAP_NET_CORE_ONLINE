using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IAOListModalService
    {
        Task<IEnumerable<AOMaintenance>> Get();
        Task<AOMaintenance> GetByUserName(string UserName);
        void OwnRequest(int Id, string userId);
        Task SaveChangesAsync();
        Task InsertAsync(Request Request);
        Task<Request> FindAsync(int id);
        void Update(Request Request);
        void Delete(Request Request);

    }
}