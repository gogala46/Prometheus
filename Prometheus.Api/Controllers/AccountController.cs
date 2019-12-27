using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Prometheus.Data;
using Prometheus.Data.Interface;
using Prometheus.Data.Models;

namespace Prometheus.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {        
        private readonly IAccountRepository _accountRepository;
        public AccountController(IAccountRepository accountRepository) => _accountRepository = accountRepository;



        

        [HttpGet]
        public async Task<IEnumerable<Account>> GetAccounts() => await _accountRepository.Get();

        [HttpGet("{id}")]
        public async Task<Account> GetAccount(int id) => await _accountRepository.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddAccount([FromBody]Account account) 
        {
            _accountRepository.Add(account);
            await _accountRepository.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveAccount(int id)
        {
            var Account= await _accountRepository.GetById(id);
            _accountRepository.Remove(Account);
            await _accountRepository.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccount(int id, [FromBody]Account acc)
        {
            _accountRepository.Update(acc);
            await _accountRepository.SaveAsync();
            return NoContent();
        }

    }
}