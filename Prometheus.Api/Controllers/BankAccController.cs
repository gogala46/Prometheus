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
    public class BankAccController : ControllerBase
    {
        private readonly IBankAccRepository _bankaccRepo;
        public BankAccController(IBankAccRepository bankaccRepo) => _bankaccRepo = bankaccRepo;



        [HttpGet]
        public async Task<IEnumerable<BankAcc>> GetBankAccs() => await _bankaccRepo.Get();

        [HttpGet("{id}")]
        public async Task<BankAcc> GetBankAcc(int id) => await _bankaccRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddBankAcc([FromBody]BankAcc bankacc)
        {
            _bankaccRepo.Add(bankacc);
            await _bankaccRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveBankAcc(int id)
        {
            var bankAcc = await _bankaccRepo.GetById(id);
            _bankaccRepo.Remove(bankAcc);
            await _bankaccRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBankAcc(int id, [FromBody]BankAcc acc)
        {
            _bankaccRepo.Update(acc);
            await _bankaccRepo.SaveAsync();
            return NoContent();
        }

    }



       
    
}