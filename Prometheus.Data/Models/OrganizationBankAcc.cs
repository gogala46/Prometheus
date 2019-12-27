namespace Prometheus.Data.Models
{
    public class OrganizationBankAcc
    {
        public int Id { get; set; }

        public int BankAccId { get; set; }
        public BankAcc bankacc { get; set; }

        public string Account { get; set; }


    }
}