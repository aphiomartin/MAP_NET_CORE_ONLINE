using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IAOListModalService
    {
        Task<IEnumerable<Models.AOMaintenance>> Get();
        Task<Models.AOMaintenance> GetByUserName(string UserName);
        void OwnRequest(int Id,string userId);

    }
}