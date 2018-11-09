using System.Collections.Generic;
using System.Linq;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public class MauOfficerDashboardService : IMauOfficerDashboardService
    {
        IUnitOfWork _unitOfWork;
        public MauOfficerDashboardService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        
        public IPagedList<Models.Branch> GetRequests()
        {
            var Repository = _unitOfWork.GetRepository<Models.Branch>();
            var request = Repository.GetPagedList(null,null, x => x.Include(y => y.Request), 0, 20, true);
            return request;
        }
    }

}