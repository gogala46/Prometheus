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
    public class OrganizationController : ControllerBase
    {
        private readonly IOrganizationRepository _organizationRepo;
        public OrganizationController(IOrganizationRepository organizationRepo) => _organizationRepo = organizationRepo;



        [HttpGet]
        public async Task<IEnumerable<Organization>> GetOrganizations() => await _organizationRepo.Get();

        [HttpGet("{id}")]
        public async Task<Organization> GetOrganization(int id) => await _organizationRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddOrganization([FromBody]Organization organization)
        {
            _organizationRepo.Add(organization);
            await _organizationRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveOrganization(int id)
        {
            var bankAcc = await _organizationRepo.GetById(id);
            _organizationRepo.Remove(bankAcc);
            await _organizationRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrganization(int id, [FromBody]Organization acc)
        {
            _organizationRepo.Update(acc);
            await _organizationRepo.SaveAsync();
            return NoContent();
        }
    }
}