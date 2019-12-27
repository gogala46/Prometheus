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
    public class AccountBiz
    {
        //private  DataContext _context;
        private  DataContext _db;

        //the framework handles this
        public AccountBiz(DataContext db)
        {
            _db = db;
        }

        public async  Task<List<Account>> GetAccounts()
        {
          
            var result = new List<Account>();

            try
            {
                //    throw new ArgumentException(
                //$"We don't offer a weather forecast for .");
                var ola = await _db.Accounts.ToListAsync();
                return ola;
            }
            catch (Exception ex)
            {
               
                throw;
                
            }
            
        }

        public async Task<bool> AddAccount(Account acc)
        {
            try
            {
                await _db.AddAsync(acc);
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> RemoveAccount(int id)
        {
            try
            {
                var checkAcc = await _db.Accounts.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkAcc != null)
                {
                    var checkChildAcc = await _db.Accounts.Where(x => x.ParentId == id).FirstOrDefaultAsync();
                    if (checkChildAcc == null)
                    {
                         _db.Accounts.Remove(checkAcc);
                    }
                    else
                    {

                    }
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


        public  void UpdateAccount(Account acc)
        {
            try
            {
                 _db.Update(acc);
                //return true;
            }
            catch (Exception ex)
            {
                //throw;
            }
        }
    }
}
