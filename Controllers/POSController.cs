using Microsoft.AspNetCore.Mvc;
using MAP_Web.Models;
using System.Threading.Tasks;

namespace MAP_Web.Controllers
{
    [Route("/api/pos")]
    public class POSController : Controller
    {
        public POSController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetPOS(int id)
        {
            // var posRepo = unitOfWork.GetRepository<POS>();

            var pos = ""; //await posRepo.GetVehicle(id);

            if (pos == null)
                return NotFound();

            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePOS([FromBody] POS pos) 
        {
            // var posRepo = unitOfWork.GetRepository<POS>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await posRepo.InsertAsync(pos);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdatePOS([FromBody] POS pos, int id)
        {
            // var posRepo = unitOfWork.GetRepository<POS>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentPos = ""; //await posRepo.GetVehicle(id);

            if (currentPos == null)
                return NotFound();
            
            // posRepo.Update(currentPos);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok(pos);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePOS(int id)
        {
            // var posRepo = unitOfWork.GetRepository<POS>();
            
            var currentPos = ""; //await posRepo.GetVehicle(id);

            if (currentPos == null)
                return NotFound();

            // posRepo.Delete(currentPos);
            // await unitOfWork.SaveChangesAsync();

            return Ok();
        }
    }
}