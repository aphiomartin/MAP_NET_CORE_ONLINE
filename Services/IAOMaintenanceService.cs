using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IAOMaintenanceService
    {
        Task<IEnumerable<Models.AOMaintenance>> Get();
        Task<Models.AOMaintenance> GetByUserName(string UserName) ;
    }
}