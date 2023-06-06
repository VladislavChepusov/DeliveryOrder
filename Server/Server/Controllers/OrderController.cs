using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using System.IO;

namespace Server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
   
        }

        [HttpGet]
        public async Task<IEnumerable<Order>> GetOrders() =>
                   await _orderService.GetOrders();


        [HttpPost]
        public async Task AddOrder(OrderModel orderModel)
        {
            await _orderService.createAnOrder(orderModel);
        }
    }
}
