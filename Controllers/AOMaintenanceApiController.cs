using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MAP_Web
{
    [Route("api/[controller]")]
    public class AOMaintenanceController : Controller
    {
        Services.IAOMaintenanceService _aoMaintenanceService;
        ILogger<AOMaintenanceController> _logger;

        public AOMaintenanceController(ILogger<AOMaintenanceController> logger, Services.IAOMaintenanceService aoMaintenanceService)
        {
            _logger = logger;
            _aoMaintenanceService = aoMaintenanceService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.AOMaintenance>> Get()
        {
            try
            {
                List<Models.AOMaintenance> result;
                result = _aoMaintenanceService.Get().ToList();
                return result;
            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute GET");
                return BadRequest();
            }
        }
    }
}