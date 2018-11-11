using System.Threading.Tasks;
using MAP_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Controllers
{
    [Route("/api/customerProfile")]
    public class CustomerProfileController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        public CustomerProfileController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomerProfile(int id)
        {
            var customerRepo = unitOfWork.GetRepository<CustomerProfile>();

            var customer = await customerRepo.FindAsync(id);

            if (customer == null)
                return NotFound();

            return Ok(customer);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomerProfile([FromBody] CustomerProfile customer)
        {
            var customerRepo = unitOfWork.GetRepository<CustomerProfile>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await customerRepo.InsertAsync(customer);
            await unitOfWork.SaveChangesAsync();

            return Ok(customer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomerProfile([FromBody] CustomerProfile customer, int id)
        {
            var customerRepo = unitOfWork.GetRepository<CustomerProfile>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cust = await customerRepo.FindAsync(id);

            if (cust == null)
                return NotFound();

            cust.customerNumber = customer.customerNumber;
            cust.dtiRegDate = customer.dtiRegDate;
            cust.legalName = customer.legalName;
            cust.ownership = customer.ownership;
            cust.registeredBusinessNumber = customer.registeredBusinessNumber;

            customerRepo.Update(cust);
            await unitOfWork.SaveChangesAsync();

            return Ok(cust);
        }
    }
}