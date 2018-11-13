using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public class POSService : IPOSService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<POS> posRepo;
        public POSService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.posRepo = this.unitOfWork.GetRepository<POS>();
        }
        public async Task InsertAsync(POS pos)
        {
            await posRepo.InsertAsync(pos);
        }

        public async Task<POS> FindAsync(int id)
        {
            return await posRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(POS pos)
        {
            posRepo.Update(pos);
        }

        public void Delete(POS pos)
        {
            posRepo.Delete(pos);
        }

        public async Task<IPagedList<POS>> FindByBranchAsync(int id)
        {
            return await posRepo.GetPagedListAsync(predicate: x => x.BranchId == id);
        }
    }
}