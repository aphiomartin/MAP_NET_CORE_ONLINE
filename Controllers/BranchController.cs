using System.Threading.Tasks;
using MAP_NET_CORE_ONLINE.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/branch")]
    public class BranchController : Controller
    {
        private readonly IBranchService branchService;

        public BranchController(IBranchService branchService)
        {
            this.branchService = branchService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBranch(int id)
        {
            var branch = await branchService.FindAsync(id);

            if (branch == null)
                return NotFound();

            return Ok(branch);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTerminalDetails([FromBody] Branch branch)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await branchService.InsertAsync(branch);
            await branchService.SaveChangesAsync();

            return Ok(branch);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBranch([FromBody] Branch branch, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentBranch = await branchService.FindAsync(id);

            if (currentBranch == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            branchService.Update(currentBranch);
            await branchService.SaveChangesAsync();

            return Ok(currentBranch);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTerminalDetails(int id)
        {
            var currentBranch = await branchService.FindAsync(id);

            if (currentBranch == null)
                return NotFound();

            branchService.Delete(currentBranch);
            await branchService.SaveChangesAsync();

            return Ok();
        }
    }
}