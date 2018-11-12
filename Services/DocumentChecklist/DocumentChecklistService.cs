using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_NET_CORE_ONLINE.Services
{
    public class DocumentChecklistService : IDocumentChecklistService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<DocumentChecklist> documentRepo;
        public DocumentChecklistService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.documentRepo = this.unitOfWork.GetRepository<DocumentChecklist>();
        }
        public async Task InsertAsync(DocumentChecklist documentChecklist)
        {
            await documentRepo.InsertAsync(documentChecklist);
        }

        public async Task<DocumentChecklist> FindAsync(int id)
        {
            return await documentRepo.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await unitOfWork.SaveChangesAsync();
        }

        public void Update(DocumentChecklist documentChecklist)
        {
            documentRepo.Update(documentChecklist);
        }
        
        public void Delete(DocumentChecklist documentChecklist)
        {
            documentRepo.Delete(documentChecklist);
        }
    }
}