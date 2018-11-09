using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/signatories")]
    public class SignatoriesController : Controller
    {
        public SignatoriesController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetSignatories(int id)
        {
            // var signaRepo = unitOfWork.GetRepository<MID>();

            var signatory = ""; //await signaRepo.GetVehicle(id);

            if (signatory == null)
                return NotFound();
                
            return Ok(signatory);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSignatories([FromBody] Signatories signatories)
        {
            // var signaRepo = unitOfWork.GetRepository<Signatories>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await signaRepo.InsertAsync(signatories);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateSignatories([FromBody] Signatories signatories, int id)
        {
            // var signaRepo = unitOfWork.GetRepository<MID>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentSigna = ""; //await signaRepo.GetVehicle(id);

            if (currentSigna == null)
                return NotFound();
            
            // signaRepo.Update(currentMid);
            // await unitOfWork.SaveChangesAsync();
                
                
            return Ok(signatories);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSignatories(int id)
        {
            // var signaRepo = unitOfWork.GetRepository<Signatories>();
            
            var currentSigna = ""; //await midRepo.GetVehicle(id);

            if (currentSigna == null)
                return NotFound();

            // signaRepo.Delete(currentSigna);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok();
        }
    }
}