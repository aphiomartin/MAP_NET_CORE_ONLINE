using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace MAP_Web.Controllers
{
    [Route("/api/terminalDetails")]
    public class TerminalDetailsController : Controller
    {
        
        public TerminalDetailsController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> GetTerminalDetails(int id)
        {
            var vehicle = ""; //await repository.GetVehicle(id);

            if (vehicle == null)
                return NotFound();
                
            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTerminalDetails([FromBody] TerminalDetails oif)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateTerminalDetails([FromBody] TerminalDetails terminal, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var vehicle = ""; //await repository.GetVehicle(id);

            if (vehicle == null)
                return NotFound();
                
            return Ok(terminal);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTerminalDetails(int id)
        {
            var vehicle = ""; //await repository.GetVehicle(id);

            if (vehicle == null)
                return NotFound();
                
            return Ok(id);
        }
    }
}