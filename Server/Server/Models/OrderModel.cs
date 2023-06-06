using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class OrderModel
    {

        public string SenderCity { get; set; } = null!;

        public string SenderAddress { get; set; } = null!;

        public string ReceiverCity { get; set; } = null!;

        public string ReceiverAddress { get; set; } = null!;

        public double CargoWeight { get; set; }

        public DateTime CargoPickupDate { get; set; }
    }
}

