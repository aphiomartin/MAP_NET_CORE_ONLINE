using System;

namespace MAP_Web.Models
{
    public class Owners
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string percentOfOwnership { get; set; }
        public int typeOfRelatedParty { get; set; }
        public string remarks { get; set; }

    }
}