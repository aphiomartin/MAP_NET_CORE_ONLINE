using System.Threading.Tasks;
using MAP_NET_CORE_ONLINE.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/documentChecklist")]
    public class DocumentChecklistController : Controller
    {
        private readonly IDocumentChecklistService documentChecklistService;

        public DocumentChecklistController(IDocumentChecklistService documentChecklistService)
        {
            this.documentChecklistService = documentChecklistService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocumentChecklist(int id)
        {
            var document = await documentChecklistService.FindAsync(id);

            if (document == null)
                return NotFound();

            return Ok(document);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDocumentChecklist([FromBody] DocumentChecklist document)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await documentChecklistService.InsertAsync(document);
            await documentChecklistService.SaveChangesAsync();

            return Ok(document);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDocumentChecklist([FromBody] DocumentChecklist document, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var doc = await documentChecklistService.FindAsync(id);

            if (doc == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            documentChecklistService.Update(document);
            await documentChecklistService.SaveChangesAsync();

            return Ok(document);
        }
    }
}