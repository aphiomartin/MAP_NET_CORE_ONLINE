using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public interface IDocumentChecklistService
    {
         Task InsertAsync(DocumentChecklist documentChecklist);
         Task<DocumentChecklist> FindAsync(int id);
         Task<IPagedList<DocumentChecklist>> FindByRequestAsync(int id);
         Task SaveChangesAsync();
         void Update(DocumentChecklist documentChecklist);
         void Delete(DocumentChecklist documentChecklist);
    }
}