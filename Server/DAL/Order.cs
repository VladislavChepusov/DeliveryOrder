using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DAL
{
    public class Order
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string SenderCity { get; set; } = null!;

        [Required]
        [StringLength(200)]
        public string SenderAddress { get; set; } = null!;

        [Required]
        [StringLength(100)]
        public string ReceiverCity { get; set; } = null!;

        [Required]
        [StringLength(200)]
        public string ReceiverAddress { get; set; } = null!;

        [Required]
        [Range(0, double.MaxValue)]
        public double CargoWeight { get; set; }

        [Required]
        public DateTimeOffset CargoPickupDate { get; set; }

        public Order()
        {
            Id = Guid.NewGuid();
        }
    }
}
