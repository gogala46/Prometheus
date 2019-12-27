using Prometheus.Data;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prometheus.Biz
{
    public class OrganizationBankAccBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public OrganizationBankAccBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<OrganizationBankAcc>> GetOrganizationBankAccs()
        {

            var result = new List<OrganizationBankAcc>();

            try
            {
                //    throw new ArgumentException(
                //$"We don't offer a weather forecast for .");
                
                return await _db.OrganizationBankAccs.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;

            }

        }

        public async Task<bool> AddOrganizationBankAcc(OrganizationBankAcc data)
        {
            try
            {
                await _db.AddAsync(data);
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> RemoveOrganizationBankAcc(int id)
        {
            try
            {
                var checkAcc = await _db.OrganizationBankAccs.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkAcc != null)
                {
                    _db.OrganizationBankAccs.Remove(checkAcc);
              
                    
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


        public void UpdateOrganizationBankAcc(OrganizationBankAcc data)
        {
            try
            {
                _db.Update(data);
                //return true;
            }
            catch (Exception ex)
            {
                //throw;
            }
        }
    }
}
