using System.ComponentModel.DataAnnotations;

namespace CPR_progress_monitoring_service.Models
{
    public class TokenRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
