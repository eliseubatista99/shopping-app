using AutoMapper;
using Database.PostgreSql.Extensions;
using ShoppingApp.Database.Models;
using ShoppingServer.BusinessLogic.Constants;
using ShoppingServer.BusinessLogic.Entities;
using ShoppingServer.BusinessLogic.Enums;
using ShoppingServer.BusinessLogic.Helpers;

namespace ShoppingServer.BusinessLogic.MapperProfiles
{
    public class ModelToDtoProfile : Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<UserModel, ClientInfoDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Email, opt => opt.MapFrom(s => s.Email))
            .ForMember(d => d.PhoneNumber, opt => opt.MapFrom(s => s.PhoneNumber))
            .ForMember(d => d.PhoneNumberPrefix, opt => opt.MapFrom(s => s.PhoneNumberPrefix))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.Addresses, opt => opt.Ignore())
            .ForMember(d => d.PaymentMethods, opt => opt.Ignore());

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

            CreateMap<PaymentMethodModel, PaymentMethodDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Type, opt => opt.MapFrom(s => this.MapPaymentMethodType(s.Type)))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Network, opt => opt.MapFrom(s => s.Network))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.CardNumberMasked, opt => opt.MapFrom(s => PaymentMethodHelper.MaskCardNumber(s.CardNumber)))
            .ForMember(d => d.IsDefault, opt => opt.MapFrom(s => s.IsDefault));

            CreateMap<PaymentMethodModel, PaymentMethodDetailsDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Type, opt => opt.MapFrom(s => this.MapPaymentMethodType(s.Type)))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Network, opt => opt.MapFrom(s => s.Network))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.CardNumberMasked, opt => opt.MapFrom(s => PaymentMethodHelper.MaskCardNumber(s.CardNumber)))
            .ForMember(d => d.IsDefault, opt => opt.MapFrom(s => s.IsDefault))
            .ForMember(d => d.SecurityCode, opt => opt.MapFrom(s => s.SecurityCode))
            .ForMember(d => d.CardNumberUnmasked, opt => opt.MapFrom(s => s.CardNumber))
            .ForMember(d => d.ExpirationMonth, opt => opt.MapFrom(s => s.ExpirationMonth))
            .ForMember(d => d.ExpirationYear, opt => opt.MapFrom(s => s.ExpirationYear));

            CreateMap<SellerModel, SellerDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image));

            CreateMap<ProductModel, ProductDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.Category, opt => opt.Ignore())
            .ForMember(d => d.Categories, opt => opt.Ignore())
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
            .ForMember(d => d.Category, opt => opt.Ignore())
            .ForMember(d => d.Categories, opt => opt.Ignore())
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

            CreateMap<OrderModel, OrderDto>()
                    .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
                    .ForMember(d => d.Products, opt => opt.Ignore())
                    .ForMember(d => d.Date, opt => opt.MapFrom(s => s.CreatedAt))
                    .ForMember(d => d.CurrentStatus, opt => opt.MapFrom(s => new OrderStatusEntryDto
                    {
                        Status = this.MapOrderStatus(s.Status),
                        Date = s.StatusDate.GetValueOrDefault(),
                    }))
                    .ForMember(d => d.TotalCost, opt => opt.MapFrom(s => s.TotalCost));

            CreateMap<OrderModel, OrderDetailDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Products, opt => opt.Ignore())
            .ForMember(d => d.Date, opt => opt.MapFrom(s => s.CreatedAt))
            .ForMember(d => d.CurrentStatus, opt => opt.MapFrom(s => new OrderStatusEntryDto
            {
                Status = this.MapOrderStatus(s.Status),
                Date = s.StatusDate.GetValueOrDefault(),
            }))
            .ForMember(d => d.TotalCost, opt => opt.MapFrom(s => s.TotalCost))
            .ForMember(d => d.StatusHistory, opt => opt.Ignore())
            .ForMember(d => d.PaymentMethod, opt => opt.Ignore())
            .ForMember(d => d.Address, opt => opt.Ignore())
            .ForMember(d => d.ProductCost, opt => opt.MapFrom(s => s.ProductCost))
            .ForMember(d => d.ShippingCost, opt => opt.MapFrom(s => s.ShippingCost))
            .ForMember(d => d.Discounts, opt => opt.MapFrom(s => s.Discounts));

            CreateMap<OrdersStatusModel, OrderStatusEntryDto>()
            .ForMember(d => d.Status, opt => opt.MapFrom(s => this.MapOrderStatus(s.Status)))
            .ForMember(d => d.Date, opt => opt.MapFrom(s => s.StatusDate));

            CreateMap<DocumentModel, DocumentDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name))
            .ForMember(d => d.Content, opt => opt.MapFrom(s => s.Content));

            CreateMap<ReviewModel, ReviewDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.ReviewerId, opt => opt.MapFrom(s => s.ReviewerId))
            .ForMember(d => d.ReviewerName, opt => opt.Ignore())
            .ForMember(d => d.ReviewerIcon, opt => opt.Ignore())
            .ForMember(d => d.Score, opt => opt.MapFrom(s => s.Score))
            .ForMember(d => d.Title, opt => opt.MapFrom(s => s.Title))
            .ForMember(d => d.Comment, opt => opt.MapFrom(s => s.Comment))
            .ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            .ForMember(d => d.ProductName, opt => opt.Ignore())
            .ForMember(d => d.ProductIcon, opt => opt.Ignore())
            .ForMember(d => d.CreatedAt, opt => opt.MapFrom(s => s.CreatedAt));

            CreateMap<OrderProductModel, CheckoutProductDto>()
            .ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            .ForMember(d => d.Quantity, opt => opt.MapFrom(s => s.Quantity));

            CreateMap<OrderProductModel, CheckoutProductDetailsDto>()
            .ForMember(d => d.ProductId, opt => opt.MapFrom(s => s.ProductId))
            .ForMember(d => d.Quantity, opt => opt.MapFrom(s => s.Quantity))
            .ForMember(d => d.Product, opt => opt.Ignore());

            CreateMap<BannerModel, ProductsBannerDto>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Title, opt => opt.MapFrom(s => s.Title))
            .ForMember(d => d.Subtitle, opt => opt.MapFrom(s => s.Subtitle))
            .ForMember(d => d.Category, opt => opt.MapFrom(s => s.Category))
            .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Image.ToBase64DataUri()))
            .ForMember(d => d.TextColor, opt => opt.MapFrom(s => s.TextColor));
        }

        private PaymentMethodType MapPaymentMethodType(string type)
        {
            switch (type)
            {
                case ShoppingServerConstants.PAYMENT_METHOD_CARD:
                    return PaymentMethodType.Card;
                case ShoppingServerConstants.PAYMENT_METHOD_BANK:
                    return PaymentMethodType.Bank;
                default:
                    return PaymentMethodType.None;
            }
        }

        private OrderStatus MapOrderStatus(string? status)
        {
            switch (status)
            {
                case ShoppingServerConstants.ORDER_STATUS_PROCESSING:
                    return OrderStatus.Processing;
                case ShoppingServerConstants.ORDER_STATUS_SENT:
                    return OrderStatus.Sent;
                case ShoppingServerConstants.ORDER_STATUS_IN_DELIVERY:
                    return OrderStatus.InDelivery;
                case ShoppingServerConstants.ORDER_STATUS_DELIVERED:
                    return OrderStatus.Delivered;
                case ShoppingServerConstants.ORDER_STATUS_CANCELLED:
                    return OrderStatus.Cancelled;
                case ShoppingServerConstants.ORDER_STATUS_RETURNED:
                    return OrderStatus.Returned;
                default:
                    return OrderStatus.None;
            }
        }
    }
}