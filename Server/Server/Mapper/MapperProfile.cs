using AutoMapper;
using DAL;
using Server.Models;

namespace Server.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<OrderModel, Order>()
                .ForMember(d => d.Id, m => m.MapFrom(s => Guid.NewGuid()))
                .ReverseMap();
        }
    }
}