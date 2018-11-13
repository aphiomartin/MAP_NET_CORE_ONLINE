using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/signatories")]
    public class SignatoriesController : Controller
    {
        private readonly ISignatoriesService signatoriesService;
        public SignatoriesController(ISignatoriesService signatoriesService)
        {
            this.signatoriesService = signatoriesService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSignatories(int id)
        {
            var signatory = await signatoriesService.FindAsync(id);

            if (signatory == null)
                return NotFound();

            return Ok(signatory);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSignatories([FromBody] Signatories signatories)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await signatoriesService.InsertAsync(signatories);
            await signatoriesService.SaveChangesAsync();

            return Ok(signatories);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSignatories([FromBody] Signatories signatories, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentSigna = await signatoriesService.FindAsync(id);

            if (currentSigna == null)
                return NotFound();

            currentSigna.name = signatories.name;
            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            signatoriesService.Update(currentSigna);
            await signatoriesService.SaveChangesAsync();


            return Ok(signatories);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSignatories(int id)
        {
            var currentSigna = await signatoriesService.FindAsync(id);

            if (currentSigna == null)
                return NotFound();

            signatoriesService.Delete(currentSigna);
            await signatoriesService.SaveChangesAsync();

            return Ok();
        }
    }
}