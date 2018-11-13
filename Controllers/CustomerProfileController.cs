using System.Threading.Tasks;
using MAP_Web.Services;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/customerProfile")]
    public class CustomerProfileController : Controller
    {
        private readonly ICustomerProfileService customerProfileService;
        public CustomerProfileController(ICustomerProfileService customerProfileService)
        {
            this.customerProfileService = customerProfileService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomerProfile(int id)
        {
            var customer = await customerProfileService.FindAsync(id);

            if (customer == null)
                return NotFound();

            return Ok(customer);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomerProfile([FromBody] CustomerProfile customer)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await customerProfileService.InsertAsync(customer);
            await customerProfileService.SaveChangesAsync();

            return Ok(customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomerProfile([FromBody] CustomerProfile customer, int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cust = await customerProfileService.FindAsync(id);

            if (cust == null)
                return NotFound();

            cust.customerNumber = customer.customerNumber;
            cust.dtiRegDate = customer.dtiRegDate;
            cust.legalName = customer.legalName;
            cust.ownership = customer.ownership;
            cust.registeredBusinessNumber = customer.registeredBusinessNumber;

            customerProfileService.Update(cust);
            await customerProfileService.SaveChangesAsync();

            return Ok(cust);
        }
    }
}