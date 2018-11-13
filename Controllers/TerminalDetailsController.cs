using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/terminalDetails")]
    public class TerminalDetailsController : Controller
    {
        private readonly ITerminalDetailsService terminalDetailsService;

        public TerminalDetailsController(ITerminalDetailsService terminalDetailsService)
        {
            this.terminalDetailsService = terminalDetailsService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTerminalDetails(int id)
        {
            var terminal = await terminalDetailsService.FindAsync(id);

            if (terminal == null)
                return NotFound();

            return Ok(terminal);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTerminalDetails([FromBody] TerminalDetails terminal)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await terminalDetailsService.InsertAsync(terminal);
            await terminalDetailsService.SaveChangesAsync();

            return Ok(terminal);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTerminalDetails([FromBody] TerminalDetails terminal, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentTerminal = await terminalDetailsService.FindAsync(id);

            if (currentTerminal == null)
                return NotFound();

            // todo: MAP FIELDS FROM API RESOURCE TO DOMAIN RESOURCE

            terminalDetailsService.Update(currentTerminal);
            await terminalDetailsService.SaveChangesAsync();

            return Ok(currentTerminal);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTerminalDetails(int id)
        {
            var currentTerminal = await terminalDetailsService.FindAsync(id);

            if (currentTerminal == null)
                return NotFound();

            terminalDetailsService.Delete(currentTerminal);
            await terminalDetailsService.SaveChangesAsync();

            return Ok();
        }
    }
}