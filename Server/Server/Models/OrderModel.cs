using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class OrderModel
    {
        [Required(ErrorMessage = "Город отправителя является обязательным.")]
        [MaxLength(100, ErrorMessage = "Город отправителя не должен превышать 100 символов.")]
        [MinLength(1, ErrorMessage = "Город отправителя не может состоять меньше, чем из 1 символа.")]
        public string SenderCity { get; set; } = null!;
        
        
        [Required(ErrorMessage = "Адрес отправителя является обязательным.")]
        [MaxLength(200, ErrorMessage = "Адрес отправителя не должен превышать 200 символов.")]
        [MinLength(1, ErrorMessage = "Адрес отправителя не может состоять меньше, чем из 1 символа.")]
        public string SenderAddress { get; set; } = null!;

        
        [Required(ErrorMessage = "Город получателяя является обязательным.")]
        [MaxLength(100, ErrorMessage = "Город получателя не должен превышать 100 символов.")]
        [MinLength(1, ErrorMessage = "Город получателя не может состоять меньше, чем из 1 символа.")]
        public string ReceiverCity { get; set; } = null!;

        
        [Required(ErrorMessage = "Адрес получателя является обязательным.")]
        [MaxLength(200, ErrorMessage = "Адрес получателя не должен превышать 200 символов.")]
        [MinLength(1, ErrorMessage = "Адрес получателя не может состоять меньше, чем из 1 символа.")]
        public string ReceiverAddress { get; set; } = null!;

        
        [Required(ErrorMessage = "Вес груза является обязательным.")]
        [Range(0, 99999, ErrorMessage = "Вес груза от 0 до 99999 кг")]
        public double CargoWeight { get; set; }

        
        [Required(ErrorMessage = "Дата забора груза является обязательным.")]
        public DateTimeOffset CargoPickupDate { get; set; }
    }
}

