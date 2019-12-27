namespace Prometheus.Data.Models
{
    public  class OrganizationPhone
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string PhoneNumber { get; set; }

        public int OrganizatinId { get; set; }
        public Organization organization { get; set; }
    }
}