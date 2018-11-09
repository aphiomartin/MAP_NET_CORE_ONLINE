using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/owners")]
    public class OwnersController : Controller
    {
        public OwnersController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetOwner(int id)
        {
            // var ownerRepo = unitOfWork.GetRepository<Owner>();

            var owner = ""; //await ownerRepo.GetVehicle(id);

            if (owner == null)
                return NotFound();

            return Ok(owner);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] Owners owner)
        {
            // var ownerRepo = unitOfWork.GetRepository<Owner>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // await ownerRepo.InsertAsync(owner);
            // await unitOfWork.SaveChangesAsync();
                
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateOwner([FromBody] Owners owners, int id)
        {
            // var ownerRepo = unitOfWork.GetRepository<Owner>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentOwner = ""; //await ownerRepo.GetVehicle(id);

            if (currentOwner == null)
                return NotFound();
            
            // ownerRepo.Update(currentMid);
            // await unitOfWork.SaveChangesAsync();

            return Ok(owners);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            // var ownerRepo = unitOfWork.GetRepository<MID>();
            
            var currentOwner = ""; //await ownerRepo.GetVehicle(id);

            if (currentOwner == null)
                return NotFound();

            // ownerRepo.Delete(currentOwner);
            // await unitOfWork.SaveChangesAsync();

            return Ok();
        }
    }
}