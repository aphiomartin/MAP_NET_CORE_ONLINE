using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/owners")]
    public class OwnersController : Controller
    {
        private readonly IOwnersService ownersService;
        public OwnersController(IOwnersService ownersService)
        {
            this.ownersService = ownersService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOwner(int id)
        {
            var owner = await ownersService.FindAsync(id);

            if (owner == null)
                return NotFound();

            return Ok(owner);
        }

        [HttpGet("customer/{id}")]
        public async Task<IActionResult> GetOwnerPerCustomer(int id)
        {
            var owner = await ownersService.FindByCustomerAsync(id);

            if (owner == null)
                return NotFound();

            return Ok(owner);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] Owners owner)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await ownersService.InsertAsync(owner);
            await ownersService.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner([FromBody] Owners owners, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentOwner = await ownersService.FindAsync(id);

            if (currentOwner == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            ownersService.Update(currentOwner);
            await ownersService.SaveChangesAsync();

            return Ok(owners);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            var currentOwner = await ownersService.FindAsync(id);

            if (currentOwner == null)
                return NotFound();

            ownersService.Delete(currentOwner);
            await ownersService.SaveChangesAsync();

            return Ok();
        }
    }
}