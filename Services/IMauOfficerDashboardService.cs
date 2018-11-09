using System.Collections;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IMauOfficerDashboardService
    {
        // IEnumerable<Models.Request> GetRequests();
        IPagedList<Models.Branch> GetRequests();
    }
}