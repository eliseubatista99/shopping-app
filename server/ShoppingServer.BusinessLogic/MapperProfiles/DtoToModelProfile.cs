using AutoMapper;

namespace ShoppingServer.BusinessLogic.MapperProfiles
{
    public class DtoToModelProfile : Profile
    {
        public DtoToModelProfile()
        {

            //CreateMap<CartProductDto, CartModel>()
            //.ForMember(d => d.Id, opt => opt.Ignore())
            //.ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            //.ForMember(d => d.Quantity, opt => opt.MapFrom(s => s.Quantity))
            //.ForMember(d => d.UserId, opt => opt.MapFrom(s => s.))
            //.ForMember(d => d.IsSelected, opt => opt.MapFrom(s => s.IsSelected));
        }
    }
}