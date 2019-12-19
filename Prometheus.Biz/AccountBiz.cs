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
        private readonly DataContext _context;
     


        public async  Task<List<Account>> GetAccounts()
        {
            var result = new List<Account>();

            try
            {
                throw new ArgumentException(
            $"We don't offer a weather forecast for .");

                return (await _context.Accounts.ToListAsync());
            }
            catch (Exception ex)
            {
               
                throw;
                
            }
            


        }
    }
}
