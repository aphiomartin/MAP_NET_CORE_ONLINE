using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_NET_CORE_ONLINE.Services
{
    public class SignatoriesService : ISignatoriesService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<Signatories> signatoriesRepo;
        public SignatoriesService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.signatoriesRepo = this.unitOfWork.GetRepository<Signatories>();
        }
        public async Task InsertAsync(Signatories signatory)
        {
            await signatoriesRepo.InsertAsync(signatory);
        }

        public async Task<Signatories> FindAsync(int id)
        {
            return await signatoriesRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(Signatories signatory)
        {
            signatoriesRepo.Update(signatory);
        }

        public void Delete(Signatories signatory)
        {
            signatoriesRepo.Delete(signatory);
        }
    }
}