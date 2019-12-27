using System;
using System.Data;
using Prometheus.Data;
using Prometheus.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Prometheus.Biz
{
    public class StockBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public StockBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<Stock>> GetStocks()
        {
            try
            {
                return await _db.Stocks.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<bool> AddStock(Stock stock)
        {
            try
            {
                await _db.AddAsync(stock);
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> RemoveStock(int id)
        {
            try
            {
                var checkStock = await _db.Stocks.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkStock != null)
                {
                    _db.Stocks.Remove(checkStock);
                }
                else
                {

                }

                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }


        public void UpdateStock(Stock stock)
        {
            try
            {
                _db.Update(stock);
                //return true;
            }
            catch (Exception ex)
            {
                //throw;
            }
        }


    }
}
