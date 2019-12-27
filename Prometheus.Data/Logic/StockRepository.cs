using Prometheus.Data.Interface;
using Prometheus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Logic
{
    public class StockRepository:Repository<Stock>, IStockRepository
    {
        public StockRepository(DataContext context) : base(context)
        {
        }
    }
}
