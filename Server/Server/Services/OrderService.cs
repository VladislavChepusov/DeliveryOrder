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
        
        // Получаем модель, мапим ее и добавляем в БД
        public async Task createAnOrder(OrderModel orderModel)
        {
            var dbOrder = _mapper.Map<Order>(orderModel);
            await _context.Orders.AddAsync(dbOrder);
            await _context.SaveChangesAsync();
        }


        // Вернуть все что есть в и таблице  заказов 
        public async Task<IEnumerable<Order>> GetOrders() =>
                    await _context.Orders.AsNoTracking().ToListAsync();

        // Вернуть запись по ID или null 
        public async Task<Order> GetOrder(Guid ID) =>
              await _context.Orders.FirstOrDefaultAsync(x => x.Id == ID);

        
    }
}
