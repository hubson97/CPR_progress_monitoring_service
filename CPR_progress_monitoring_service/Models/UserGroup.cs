using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CPR_progress_monitoring_service.Models
{
    public class UserGroup
    {
        [Key]
        public int GroupID { get; set; }
        public string GroupName { get; set; }
        public int GroupSupervisorID { get; set; }
        public string Description { get; set; }

        public ICollection<ApplicationUser> ApplicationUsers { get; set; }

    }
}
