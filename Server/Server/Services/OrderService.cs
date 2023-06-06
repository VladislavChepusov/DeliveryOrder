using AutoMapper;
using DAL;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Services
{
    public class OrderService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        // Конструктор сервиса
        public OrderService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        /// мб проверку вставить?
        public async Task createAnOrder(OrderModel orderModel)
        {
            var dbOrder = _mapper.Map<Order>(orderModel);
            await _context.Orders.AddAsync(dbOrder);
            await _context.SaveChangesAsync();
        }


        // Вернуть список 
        public async Task<IEnumerable<Order>> GetOrders() =>
                    await _context.Orders.AsNoTracking().ToListAsync();

    }
}
