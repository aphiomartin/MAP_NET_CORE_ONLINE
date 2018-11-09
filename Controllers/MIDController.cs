using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/mid")]
    public class MIDController : Controller
    {

        public MIDController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetMID(int id)
        {
            // var midRepo = unitOfWork.GetRepository<MID>();

            var mid = ""; //await midRepo.GetVehicle(id);

            if (mid == null)
                return NotFound();

            return Ok(mid);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMID([FromBody] MID mid)
        {
            // var midRepo = unitOfWork.GetRepository<MID>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await midRepo.InsertAsync(mid);
            // await unitOfWork.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateMID([FromBody] MID mid, int id)
        {
            // var midRepo = unitOfWork.GetRepository<MID>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentMid = ""; //await midRepo.GetVehicle(id);

            if (currentMid == null)
                return NotFound();
            
            // midRepo.Update(currentMid);
            // await unitOfWork.SaveChangesAsync();

            return Ok(mid);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteMID(int id)
        {
            // var midRepo = unitOfWork.GetRepository<MID>();
            
            var currentMid = ""; //await midRepo.GetVehicle(id);

            if (currentMid == null)
                return NotFound();

            // midRepo.Delete(currentMid);
            // await unitOfWork.SaveChangesAsync();

            return Ok();
        }
    }
}