using System;
using System.Collections.Generic;
using System.Text;

namespace Prometheus.Data.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public bool FixedAssets { get; set; }
        public string Name { get; set; }


        public int GoodId { get; set; }
        public Good good { get; set; }

        public string MinUnit { get; set; }

        public int? SellingValue { get; set; }
        

        public int? AccountId { get; set; }
        public Account account { get; set; }

    }
}
