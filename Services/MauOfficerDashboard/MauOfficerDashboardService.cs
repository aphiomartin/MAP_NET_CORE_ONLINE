using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;
using MAP_NET_CORE_ONLINE.Services;

namespace MAP_NET_CORE_ONLINE.Services
{
    public class MauOfficerDashboardService : IMauOfficerDashboardService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository<Branch> branchRepo;

        public MauOfficerDashboardService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            branchRepo = _unitOfWork.GetRepository<Branch>();
        }

        public async Task<IEnumerable<Branch>> GetRequests()
        {
             var request = branchRepo.GetPagedList(null,null,x => x.Include(z => z.Request),0,20,true);
             return await request.Items.ToAsyncEnumerable().ToList();
            // return await branchRepo.GetPagedListAsync(null,null, x => x.Include(y => y.Request), 1, 20, true);
        }
    }

}