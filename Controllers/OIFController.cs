using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/oif")]
    public class OIFController : Controller
    {
        public OIFController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetOIF(int id)
        {
            // var oifRepo = unitOfWork.GetRepository<OIF>();

            var oif = ""; //await oifRepo.GetVehicle(id);

            if (oif == null)
                return NotFound();

            return Ok(oif);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOIF([FromBody] OIF oif)
        {
            // var oifRepo = unitOfWork.GetRepository<OIF>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await oifRepo.InsertAsync(oif);
            // await unitOfWork.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateOIF([FromBody] OIF oif, int id)
        {
            // var oifRepo = unitOfWork.GetRepository<MID>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentOif = ""; //await oifRepo.GetVehicle(id);

            if (currentOif == null)
                return NotFound();
            
            // oifRepo.Update(oif);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok(oif);
        }
    }
}