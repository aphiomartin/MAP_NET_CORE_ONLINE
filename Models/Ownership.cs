using System.ComponentModel.DataAnnotations.Schema;

namespace MAP_Web.Models
{
    [Table("OwnershipTypeView")]
    public class Ownership 
    {
        
        public int Id { get; set; }
        public string Code { get; set; }
        public string description { get; set; }

    }
}