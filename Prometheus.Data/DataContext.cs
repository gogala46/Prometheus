using Microsoft.EntityFrameworkCore;
using Prometheus.Data.Models;
using System;


namespace Prometheus.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<AccountType> AccountTypes { get; set; }
    }
}
