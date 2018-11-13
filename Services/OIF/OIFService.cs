using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_NET_CORE_ONLINE.Services
{
    public class OIFService : IOIFService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<OIF> oifRepo;
        public OIFService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.oifRepo = this.unitOfWork.GetRepository<OIF>();
        }
        public async Task InsertAsync(OIF oif)
        {
            await oifRepo.InsertAsync(oif);
        }

        public async Task<OIF> FindAsync(int id)
        {
            return await oifRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(OIF oif)
        {
            oifRepo.Update(oif);
        }

        public void Delete(OIF oif)
        {
            oifRepo.Delete(oif);
        }
    }
}