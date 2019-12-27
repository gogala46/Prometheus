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
    public class GoodController : ControllerBase
    {
        private readonly IGoodRepository _goodRepo;
        public GoodController(IGoodRepository goodRepo) => _goodRepo = goodRepo;



        [HttpGet]
        public async Task<IEnumerable<Good>> GetGoods() => await _goodRepo.Get();

        [HttpGet("{id}")]
        public async Task<Good> GetGood(int id) => await _goodRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddGood([FromBody]Good good)
        {
            _goodRepo.Add(good);
            await _goodRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveGood(int id)
        {
            var bankAcc = await _goodRepo.GetById(id);
            _goodRepo.Remove(bankAcc);
            await _goodRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGood(int id, [FromBody]Good acc)
        {
            _goodRepo.Update(acc);
            await _goodRepo.SaveAsync();
            return NoContent();
        }

    }

}
