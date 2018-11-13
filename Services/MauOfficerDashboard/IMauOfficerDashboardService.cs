using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MAP_NET_CORE_ONLINE.Services;
using MAP_Web.Models;

namespace MAP_NET_CORE_ONLINE.Services
{
    public interface IMauOfficerDashboardService
    {
        // IEnumerable<Models.Request> GetRequests();
        Task<IEnumerable<Branch>> GetRequests();
    }
}