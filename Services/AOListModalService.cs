
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{

    public class AOListModalService : IAOListModalService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository<AOMaintenance> _aoMaintenanceRepo;
        private readonly IRepository<Request> _requestRepo;
        public AOListModalService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _aoMaintenanceRepo = _unitOfWork.GetRepository<Models.AOMaintenance>();
            _requestRepo = _unitOfWork.GetRepository<Models.Request>();
        }

        public async Task<IEnumerable<Models.AOMaintenance>> Get()
        {
            var result = _aoMaintenanceRepo.GetPagedList();
            return await result.Items.ToAsyncEnumerable().ToList();
        }

        public async Task<Models.AOMaintenance> GetByUserName(string UserName)
        {
            var result = _aoMaintenanceRepo.GetFirstOrDefaultAsync(x => x.userId.Equals(UserName),null,null,true).ToAsyncEnumerable();
            return await result.FirstOrDefault();
        }

        public void OwnRequest(int Id, string userId)
        {
            var request = _requestRepo.Find(Id);
            request.Id = Id;
            request.Owner = userId;
            _requestRepo.Update(request);
        }
    }

}