using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MAP_Web.Models;

namespace MAP_Web.Services
{
    public interface IMauOfficerDashboardService
    {
        // IEnumerable<Models.Request> GetRequests();
        Task<IEnumerable<Branch>> GetRequests();
    }
}