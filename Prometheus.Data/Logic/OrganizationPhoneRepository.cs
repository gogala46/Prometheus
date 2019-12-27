using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class OrganizationPhoneRepository: Repository<OrganizationPhone>, IOrganizationPhoneRepository
    {
        public OrganizationPhoneRepository(DataContext context) : base(context)
        {
        }
    }
}
