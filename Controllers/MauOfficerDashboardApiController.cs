using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web
{
    [Route("api/[controller]")]
    public class MauOfficerDashboardController : Controller
    {
        Services.IMauOfficerDashboardService _service;
        ILogger<MauOfficerDashboardController> _logger;

        public MauOfficerDashboardController(ILogger<MauOfficerDashboardController> logger, Services.IMauOfficerDashboardService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.ViewModels.MauOfficerDashboardViewModel>> Get()
        {
            try
            {
                IPagedList<Models.Branch> requests = _service.GetRequests();
                List<Models.ViewModels.MauOfficerDashboardViewModel> finalResult = new List<Models.ViewModels.MauOfficerDashboardViewModel>();
            
                foreach (var item in requests.Items)
                {
                    // var createdDate = item.Request.CreatedDate.ToString();
                    // var parsedDate = DateTime.Parse(createdDate);
                    // var daySpan = (DateTime.Now - parsedDate).TotalHours;

                    // finalResult.Add(new Models.ViewModels.MauOfficerDashboardViewModel
                    // {
                    //     RequestId = item.Id,
                    //     ReferenceNo = item.Request.TrackingNo,
                    //     RequestedDate = item.Request.CreatedDate ?? System.DateTime.Now,
                    //     RequestType = item.Request.RequestDescription,
                    //     BusinessName = item.legalName,
                    //     DBAName =  item.DBAName,
                    //     RequestedBy = item.Request.CreatedBy,
                    //     Status = "For Evaluation", //For Testing Purposes Only
                    //     TAT = (int)(daySpan + 0.5d)
                    // });
                }

                return finalResult;

            }
            catch (Exception)
            {
                _logger.LogError("Failed to execute GET");
                return BadRequest();
            }
        }
    }
}