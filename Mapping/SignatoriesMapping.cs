using AutoMapper;
using MAP_Web.Models;
using MAP_Web.Models.ViewModels;

namespace MAP_Web.Mapping
{
    public class SignatoriesMapping : Profile
    {
        public SignatoriesMapping()
        {
            CreateMap<SignatoriesViewModel, Signatories>()
                .ForMember(cp => cp.Id, opt => opt.Ignore());
        }
    }
}