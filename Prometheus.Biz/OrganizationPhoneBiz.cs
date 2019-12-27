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
    public class OrganizationPhoneBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public OrganizationPhoneBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<OrganizationPhone>> GetOrganizationPhones()
        {



            try
            {
                //    throw new ArgumentException(
                //$"We don't offer a weather forecast for .");

                return await _db.OrganizationPhones.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;

            }

        }

        public async Task<bool> AddOrganizationPhone(OrganizationPhone data)
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

        public async Task<bool> RemoveOrganizationPhone(int id)
        {
            try
            {
                var checkAcc = await _db.OrganizationPhones.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkAcc != null)
                {
                    _db.OrganizationPhones.Remove(checkAcc);


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


        public void UpdateOrganizationPhone(OrganizationPhone data)
        {
            try
            {
                _db.Update(data);

            }
            catch (Exception ex)
            {
                //throw;
            }
        }
    }
}
