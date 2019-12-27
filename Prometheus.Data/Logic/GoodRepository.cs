using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class GoodRepository:Repository<Good>, IGoodRepository
    {
        public GoodRepository(DataContext context) : base(context)
        {
        }
    }
}
