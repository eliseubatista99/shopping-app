using AutoMapper;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Entities;

namespace ShoppingServer.BusinessLogic.MapperProfiles
{
    public class ModelToDtoProfile : Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<AddressModel, AddressDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.PostalCode, opt => opt.MapFrom(s => s.PostalCode))
            .ForMember(d => d.City, opt => opt.MapFrom(s => s.City))
            .ForMember(d => d.Location, opt => opt.MapFrom(s => s.Location))
            .ForMember(d => d.Street, opt => opt.MapFrom(s => s.Street))
            .ForMember(d => d.Country, opt => opt.MapFrom(s => s.Country))
            .ForMember(d => d.Phone, opt => opt.MapFrom(s => s.Phone))
            .ForMember(d => d.CountryCode, opt => opt.MapFrom(s => s.CountryCode))
            .ForMember(d => d.IsDefault, opt => opt.MapFrom(s => s.IsDefault));


            CreateMap<ProductModel, ProductDto>()
                .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
                .ForMember(d => d.Category, opt => opt.MapFrom(s => s.Category))
                .ForMember(d => d.Image, opt => opt.Ignore())
                .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
                .ForMember(d => d.OriginalPrice, opt => opt.MapFrom(s => s.OriginalPrice))
                .ForMember(d => d.Score, opt => opt.MapFrom(s => s.Score))
                .ForMember(d => d.ScoreCount, opt => opt.MapFrom(s => s.ScoreCount))
                .ForMember(d => d.ShippingCost, opt => opt.MapFrom(s => s.ShippingCost))
                .ForMember(d => d.BestSeller, opt => opt.MapFrom(s => s.BestSeller))
                .ForMember(d => d.IsWishlisted, opt => opt.MapFrom(s => s.IsWishlisted))
                .ForMember(d => d.CreatedAt, opt => opt.MapFrom(s => s.CreatedAt));
        }
    }
}
