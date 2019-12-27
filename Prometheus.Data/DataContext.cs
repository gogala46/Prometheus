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
        public DbSet<BankAcc> bankAccs { get; set; }
        public DbSet<Good> Goods { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<OrganizationBankAcc> OrganizationBankAccs { get; set; }
        public DbSet<OrganizationPhone> OrganizationPhones { get; set; }
    }
}
