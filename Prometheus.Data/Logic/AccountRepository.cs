using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        public AccountRepository(DataContext context) : base(context)
        { 
        }
    }
}
