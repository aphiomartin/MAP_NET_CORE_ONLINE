namespace MAP_Web.Models.ViewModels
{
    public class OwnersViewModel
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string percentOfOwnership { get; set; }
        public int typeOfRelatedParty { get; set; }
        public string remarks { get; set; }
        public int CustomerProfileId { get; set; }
        public CustomerProfileViewModel CustomerProfile { get; set; }
    }
}