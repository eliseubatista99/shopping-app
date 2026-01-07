using AutoMapper;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;

namespace ShoppingServer.BusinessLogic.MapperProfiles
{
    public class ModelToDtoProfile : Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<AddressModel, AddressDto>();
                //.ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name));
        }
    }
}
