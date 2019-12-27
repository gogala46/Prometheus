using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class BankAccRepository : Repository<BankAcc>, IBankAccRepository
    {
        public BankAccRepository(DataContext context) : base(context)
        {
        }
    }
}
