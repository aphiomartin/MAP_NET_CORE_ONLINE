using AutoMapper;
using MAP_Web.Models;
using MAP_Web.Models.ViewModels;

namespace MAP_Web.Mapping
{
    public class OwnersMapping : Profile
    {
        public OwnersMapping()
        {
            CreateMap<OwnersViewModel, Owners>()
                .ForMember(cp => cp.Id, opt => opt.Ignore());
        }
    }
}