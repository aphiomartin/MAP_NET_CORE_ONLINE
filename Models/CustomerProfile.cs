using System;

namespace MAP_Web.Models
{
    public class CustomerProfile
    {
        public int Id { get; set; }
        public string legalName { get; set; }
        public int ownership { get; set; }
        public Nullable<DateTime> dtiRegDate { get; set; }
        public string registeredBusinessNumber { get; set; }
        public string customerNumber { get; set; }
    }
}