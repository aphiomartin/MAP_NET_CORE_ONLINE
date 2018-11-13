using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/mid")]
    public class MIDController : Controller
    {
        private readonly IMIDService midService;

        public MIDController(IMIDService midService)
        {
            this.midService = midService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMID(int id)
        {
            var mid = await midService.FindAsync(id);

            if (mid == null)
                return NotFound();

            return Ok(mid);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMID([FromBody] MID mid)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await midService.InsertAsync(mid);
            await midService.SaveChangesAsync();

            return Ok(mid);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMID([FromBody] MID mid, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentMid = await midService.FindAsync(id);

            if (currentMid == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            midService.Update(currentMid);
            await midService.SaveChangesAsync();

            return Ok(mid);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMID(int id)
        {
            var currentMid = await midService.FindAsync(id);

            if (currentMid == null)
                return NotFound();

            midService.Delete(currentMid);
            await midService.SaveChangesAsync();

            return Ok();
        }
    }
}