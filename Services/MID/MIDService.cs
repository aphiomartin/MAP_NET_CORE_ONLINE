using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_NET_CORE_ONLINE.Services
{
    public class MIDService : IMIDService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<MID> midRepo;
        public MIDService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.midRepo = this.unitOfWork.GetRepository<MID>();
        }
        public async Task InsertAsync(MID mid)
        {
            await midRepo.InsertAsync(mid);
        }

        public async Task<MID> FindAsync(int id)
        {
            return await midRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(MID mid)
        {
            midRepo.Update(mid);
        }

        public void Delete(MID mid)
        {
            midRepo.Delete(mid);
        }
    }
}