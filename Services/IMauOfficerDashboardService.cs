using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IMauOfficerDashboardService
    {
        // IEnumerable<Models.Request> GetRequests();
        Task<IEnumerable<Models.Branch>> GetRequests();
    }
}