using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Prometheus.Data;
using Prometheus.Data.Interface;
using Prometheus.Data.Models;

namespace Prometheus.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrganizationBankAccController : ControllerBase
    {
        private readonly IOrganizationBankAccRepository _organizationbankaccRepo;
        public OrganizationBankAccController(IOrganizationBankAccRepository organizationbankaccRepo) => _organizationbankaccRepo = organizationbankaccRepo;



        [HttpGet]
        public async Task<IEnumerable<OrganizationBankAcc>> GetOrganizationBankAccs() => await _organizationbankaccRepo.Get();

        [HttpGet("{id}")]
        public async Task<OrganizationBankAcc> GetOrganizationBankAcc(int id) => await _organizationbankaccRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddOrganizationBankAcc([FromBody]OrganizationBankAcc organizationbankacc)
        {
            _organizationbankaccRepo.Add(organizationbankacc);
            await _organizationbankaccRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveOrganizationBankAcc(int id)
        {
            var bankAcc = await _organizationbankaccRepo.GetById(id);
            _organizationbankaccRepo.Remove(bankAcc);
            await _organizationbankaccRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrganizationBankAcc(int id, [FromBody]OrganizationBankAcc acc)
        {
            _organizationbankaccRepo.Update(acc);
            await _organizationbankaccRepo.SaveAsync();
            return NoContent();
        }
    }
}