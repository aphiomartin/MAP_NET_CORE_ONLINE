using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/oif")]
    public class OIFController : Controller
    {
        private readonly IOIFService oifService;
        public OIFController(IOIFService oifService)
        {
            this.oifService = oifService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOIF(int id)
        {
            var oif = await oifService.FindAsync(id);

            if (oif == null)
                return NotFound();

            return Ok(oif);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOIF([FromBody] OIF oif)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await oifService.InsertAsync(oif);
            await oifService.SaveChangesAsync();

            return Ok(oif);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOIF([FromBody] OIF oif, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentOif = await oifService.FindAsync(id);

            if (currentOif == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            oifService.Update(currentOif);
            await oifService.SaveChangesAsync();

            return Ok(currentOif);
        }
    }
}