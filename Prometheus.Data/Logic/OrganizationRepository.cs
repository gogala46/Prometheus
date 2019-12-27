using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class OrganizationRepository:Repository<Organization>, IOrganizationRepository
    {
        public OrganizationRepository(DataContext context) : base(context)
        {
        }
    }
}
