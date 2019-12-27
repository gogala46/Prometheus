using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string IdCode { get; set; }
        public string ExchequerCode { get; set; }
        public string Index { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string FirstPerson { get; set; }
        public string SecondPerson { get; set; }

        public List<OrganizationPhone> OrganizationPhones { get; set; }

        public List<OrganizationBankAcc> OrganizationBankAccs { get; set; }
    }
}
