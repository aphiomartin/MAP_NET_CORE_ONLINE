using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using MAP_Web.Models.ViewModels;

namespace MAP_Web.Controllers
{
    [Route("/api/documentChecklist")]
    public class DocumentChecklistController : Controller
    {
        private readonly IDocumentChecklistService documentChecklistService;
        private readonly IMapper mapper;

        public DocumentChecklistController(IDocumentChecklistService documentChecklistService, IMapper mapper)
        {
            this.mapper = mapper;
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
        public async Task<IActionResult> UpdateDocumentChecklist([FromBody] DocumentChecklistViewModel document, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var doc = await documentChecklistService.FindAsync(id);

            if (doc == null)
                return NotFound();

            mapper.Map<DocumentChecklistViewModel, DocumentChecklist>(document, doc);

            await documentChecklistService.SaveChangesAsync();

            return Ok(document);
        }
    }
}