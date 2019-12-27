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
    public class OrganizationPhoneController : ControllerBase
    {
        private readonly IOrganizationPhoneRepository _organizationphoneRepo;
        public OrganizationPhoneController(IOrganizationPhoneRepository organizationphoneRepo) => _organizationphoneRepo = organizationphoneRepo;



        [HttpGet]
        public async Task<IEnumerable<OrganizationPhone>> GetOrganizationPhones() => await _organizationphoneRepo.Get();

        [HttpGet("{id}")]
        public async Task<OrganizationPhone> GetOrganizationPhone(int id) => await _organizationphoneRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddOrganizationPhone([FromBody]OrganizationPhone organizationphone)
        {
            _organizationphoneRepo.Add(organizationphone);
            await _organizationphoneRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveOrganizationPhone(int id)
        {
            var bankAcc = await _organizationphoneRepo.GetById(id);
            _organizationphoneRepo.Remove(bankAcc);
            await _organizationphoneRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrganizationPhone(int id, [FromBody]OrganizationPhone acc)
        {
            _organizationphoneRepo.Update(acc);
            await _organizationphoneRepo.SaveAsync();
            return NoContent();
        }
    }
}