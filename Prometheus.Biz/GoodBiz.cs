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
    public class GoodBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public GoodBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<Good>> GetGoods()
        {
            try
            {
                return await _db.Goods.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<bool> AddGood(Good good)
        {
            try
            {
                await _db.AddAsync(good);
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> RemoveGood(int id)
        {
            try
            {
                var checkGood = await _db.Goods.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkGood != null)
                {
                    _db.Goods.Remove(checkGood);
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


        public void UpdateGood(Good good)
        {
            try
            {
                _db.Update(good);
                //return true;
            }
            catch (Exception ex)
            {
                //throw;
            }
        }
    }
}
