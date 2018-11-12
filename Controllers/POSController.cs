using Microsoft.AspNetCore.Mvc;
using MAP_Web.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MAP_NET_CORE_ONLINE.Services;

namespace MAP_Web.Controllers
{
    [Route("/api/pos")]
    public class POSController : Controller
    {
        private readonly IPOSService posService;
        public POSController(IPOSService posService)
        {
            this.posService = posService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPOS(int id)
        {
            var pos = await posService.FindAsync(id);

            if (pos == null)
                return NotFound();

            return Ok(pos);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePOS([FromBody] POS pos)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await posService.InsertAsync(pos);
            await posService.SaveChangesAsync();

            return Ok(pos);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePOS([FromBody] POS pos, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentPos = await posService.FindAsync(id);

            if (currentPos == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            posService.Update(currentPos);
            await posService.SaveChangesAsync();

            return Ok(pos);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePOS(int id)
        {
            var currentPos = await posService.FindAsync(id);

            if (currentPos == null)
                return NotFound();

            posService.Delete(currentPos);
            await posService.SaveChangesAsync();

            return Ok();
        }
    }
}