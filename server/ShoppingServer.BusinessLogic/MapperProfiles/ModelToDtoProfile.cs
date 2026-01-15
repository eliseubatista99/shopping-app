using AutoMapper;
using Database.PostgreSql.Extensions;
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

            CreateMap<SellerModel, SellerDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image));

            CreateMap<ProductModel, ProductDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.Category, opt => opt.MapFrom(s => s.Category))
            .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
            .ForMember(d => d.OriginalPrice, opt => opt.MapFrom(s => s.OriginalPrice))
            .ForMember(d => d.Score, opt => opt.MapFrom(s => s.Score))
            .ForMember(d => d.ScoreCount, opt => opt.MapFrom(s => s.ScoreCount))
            .ForMember(d => d.ShippingCost, opt => opt.MapFrom(s => s.ShippingCost))
            .ForMember(d => d.BestSeller, opt => opt.MapFrom(s => s.BestSeller))
            .ForMember(d => d.IsWishlisted, opt => opt.MapFrom(s => s.IsWishlisted))
            .ForMember(d => d.CreatedAt, opt => opt.MapFrom(s => s.CreatedAt));

            CreateMap<ProductModel, ProductDetailDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Category, opt => opt.MapFrom(s => s.Category))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
            .ForMember(d => d.OriginalPrice, opt => opt.MapFrom(s => s.OriginalPrice))
            .ForMember(d => d.Score, opt => opt.MapFrom(s => s.Score))
            .ForMember(d => d.ScoreCount, opt => opt.MapFrom(s => s.ScoreCount))
            .ForMember(d => d.ShippingCost, opt => opt.MapFrom(s => s.ShippingCost))
            .ForMember(d => d.BestSeller, opt => opt.MapFrom(s => s.BestSeller))
            .ForMember(d => d.IsWishlisted, opt => opt.MapFrom(s => s.IsWishlisted))
            .ForMember(d => d.CreatedAt, opt => opt.MapFrom(s => s.CreatedAt))
            .ForMember(d => d.Specifications, opt => opt.MapFrom(s => new ProductSpecificationDto
            {
                Brand = s.Brand,
                Origin = s.Origin,
                Manufacturer = s.Manufacturer,
                Height = s.Height,
                Width = s.Width,
                Depth = s.Depth,
                Warranty = s.Warranty,
            }))
            .ForMember(d => d.Seller, opt => opt.Ignore())
            .ForMember(d => d.Documents, opt => opt.Ignore())
            .ForMember(d => d.DetailImages, opt => opt.Ignore())
            .ForMember(d => d.ProductOptions, opt => opt.Ignore())
            .ForMember(d => d.RelatedProducts, opt => opt.Ignore())
            .ForMember(d => d.ComboProducts, opt => opt.Ignore())
            .ForMember(d => d.Reviews, opt => opt.Ignore())
            .ForMember(d => d.EstimatedDeliveryDate, opt => opt.Ignore());

            CreateMap<ProductModel, ProductOptionDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.Price, opt => opt.MapFrom(s => s.Price))
            .ForMember(d => d.OriginalPrice, opt => opt.MapFrom(s => s.OriginalPrice));

            CreateMap<CartModel, CartProductDto>()
            .ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            .ForMember(d => d.Quantity, opt => opt.MapFrom(s => s.Quantity))
            .ForMember(d => d.IsSelected, opt => opt.MapFrom(s => s.IsSelected));

            CreateMap<CartModel, CartProductDetailsDto>()
            .ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            .ForMember(d => d.Quantity, opt => opt.MapFrom(s => s.Quantity))
            .ForMember(d => d.IsSelected, opt => opt.MapFrom(s => s.IsSelected))
            .ForMember(d => d.Product, opt => opt.Ignore());
        }
    }
}
