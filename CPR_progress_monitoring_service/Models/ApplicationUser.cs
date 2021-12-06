using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Measurement> Measurements { get; set; }
        public UserGroup UserGroup { get; set; }

    }
}
