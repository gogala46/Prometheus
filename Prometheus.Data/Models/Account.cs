using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string AccountName { get; set; }
        public string Name { get; set; }
      
        public int AccountTypeId { get; set; }

        public AccountType accountType { get; set; }

        public int? ParentId { get; set; }
        public Account account { get; set; }

        public List<Account> Accounts { get; set; }
    }
}
