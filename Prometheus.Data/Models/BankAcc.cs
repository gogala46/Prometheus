using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Models
{
    public class BankAcc
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }

        public string Corr { get; set; }


        public List<OrganizationBankAcc> organizationBankAccs { get; set; }

    }
}
