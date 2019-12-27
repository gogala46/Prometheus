using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class OrganizationBankAccRepository:Repository<OrganizationBankAcc>, IOrganizationBankAccRepository
    {
        public OrganizationBankAccRepository(DataContext context) : base(context)
        {
        }
    }
}
