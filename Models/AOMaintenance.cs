using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MAP_Web.Models
{
    public class AOMaintenance
    {
        
        public int Id { get; set; }
        public string userId { get; set; }
        public string lastName { get; set; }
        public string firstName { get; set; }
        public string middleName { get; set; }
        public Nullable<int> BusinessUnitId { get; set; }
        public Nullable<int> SegmentId { get; set; }
        public bool isBusinessUnitHead { get; set; }
        public string contactNumber { get; set; }

    }
} 
