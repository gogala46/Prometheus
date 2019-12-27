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
    public class OrganizationBiz
    {
        private readonly DataContext _db;

        //the framework handles this
        public OrganizationBiz(DataContext db)
        {
            _db = db;
        }

        public async Task<List<Organization>> GetOrganizations()
        {

            

            try
            {
                //    throw new ArgumentException(
                //$"We don't offer a weather forecast for .");

                return await _db.Organizations.ToListAsync();
            }
            catch (Exception ex)
            {

                throw;

            }

        }

        public async Task<bool> AddOrganization(Organization data)
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

        public async Task<bool> RemoveOrganization(int id)
        {
            try
            {
                var checkAcc = await _db.Organizations.Where(x => x.Id == id).FirstOrDefaultAsync();
                if (checkAcc != null)
                {
                    _db.Organizations.Remove(checkAcc);


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


        public void UpdateOrganization(Organization data)
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
