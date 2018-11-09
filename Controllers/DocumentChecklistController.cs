using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/documentChecklist")]
    public class DocumentChecklistController : Controller
    {

        public DocumentChecklistController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetDocumentChecklist(int id)
        {
            // var documentRepo = unitOfWork.GetRepository<DocumentChecklist>();

            var document = ""; //await documentRepo.GetPagedListAsync(id);

            if (document == null)
                return NotFound();            

            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDocumentChecklist([FromBody] DocumentChecklist document)
        {
            // var documentRepo = unitOfWork.GetRepository<DocumentChecklist>();
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await documentRepo.InsertAsync(document);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok(document);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateDocumentChecklist([FromBody] DocumentChecklist document, int id)
        {
            // var documentRepo = unitOfWork.GetRepository<DocumentChecklist>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var doc = ""; //await documentRepo.GetPagedListAsync(id);

            if (doc == null)
                return NotFound();

            // documentRepo.Update(document);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok(document);
        }
    }
}