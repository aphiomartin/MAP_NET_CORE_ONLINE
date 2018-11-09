using System.Collections.Generic;
using System.Linq;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{

    public class AOMaintenanceService : IAOMaintenanceService
    {
        IUnitOfWork _unitOfWork;
        public AOMaintenanceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IEnumerable<Models.AOMaintenance> Get()
        {
            var aoMaintenanceRepository = _unitOfWork.GetRepository<Models.AOMaintenance>();
            var items = aoMaintenanceRepository.GetAll();
            return items;
        }
    }

}