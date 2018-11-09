using System;

namespace MAP_Web.Models
{
    public class DocumentChecklist
    {
        public int Id { get; set; }
        public string documentName { get; set; }
        public string remarks { get; set; }
        public bool submitted { get; set; }
        public Nullable<DateTime> targetDateOfSubmission { get; set; }
        public byte[] fileUpload { get; set; }
    }
}