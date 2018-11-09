using System.Collections;
using System.Collections.Generic;

namespace MAP_Web.Services
{
    public interface IAOMaintenanceService
    {
        IEnumerable<Models.AOMaintenance> Get();
    }
}