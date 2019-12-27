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
    public class BankAccBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public BankAccBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<BankAcc>> GetBankAccs()
        {
            try
            {
                return await _db.bankAccs.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<bool> AddBankAcc(BankAcc bankAcc)
        {
            try
            {
                await _db.AddAsync(bankAcc);
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> RemoveBankAcc(int id)
        {
            try
            {
                var checkBankAcc = await _db.bankAccs.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkBankAcc != null)
                {
                    _db.bankAccs.Remove(checkBankAcc);
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


        public void UpdateBankAcc(BankAcc bankacc)
        {
            try
            {
                _db.Update(bankacc);
                //return true;
            }
            catch (Exception ex)
            {
                //throw;
            }
        }
    }
}
