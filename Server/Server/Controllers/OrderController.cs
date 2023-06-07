using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using System.IO;
using System.Text.Json;
using System.Linq;
using System.ComponentModel.DataAnnotations;
 
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

        // Вернуть список всех записей 
        [HttpGet]
        public async Task<IEnumerable<Order>> GetOrders() =>
                   await _orderService.GetOrders();


        // Вернуть запись по ее ID
        [HttpGet]
        public async Task<IActionResult> GetOrderById(Guid ID)
        {
           var Data = await _orderService.GetOrder(ID);
           if (Data == null)
                return NotFound();
           else
                return Ok(Data);
        }
                 

        // Добавить запись
        [HttpPost]
        public async Task<IActionResult> AddOrder(OrderModel orderModel)
        {
            // Проверка валидности введенных данных
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(error => error.ErrorMessage).ToList();
                var jsonResponse = JsonSerializer.Serialize(errors);
                return BadRequest(jsonResponse);
            }
            else
            {
                await _orderService.createAnOrder(orderModel); 
                return Ok("Данные успешно обработаны");
            }             
        }
    }
}
