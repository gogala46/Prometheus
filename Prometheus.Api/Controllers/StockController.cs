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
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;
        public StockController(IStockRepository stockRepo) => _stockRepo = stockRepo;



        [HttpGet]
        public async Task<IEnumerable<Stock>> GetStocks() => await _stockRepo.Get();

        [HttpGet("{id}")]
        public async Task<Stock> GetStock(int id) => await _stockRepo.GetById(id);

        [HttpPost]
        public async Task<IActionResult> AddStock([FromBody]Stock stock)
        {
            _stockRepo.Add(stock);
            await _stockRepo.SaveAsync();
            return Created("", "created new acc");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveStock(int id)
        {
            var bankAcc = await _stockRepo.GetById(id);
            _stockRepo.Remove(bankAcc);
            await _stockRepo.SaveAsync();
            return NoContent();
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStock(int id, [FromBody]Stock acc)
        {
            _stockRepo.Update(acc);
            await _stockRepo.SaveAsync();
            return NoContent();
        }
    }
}
