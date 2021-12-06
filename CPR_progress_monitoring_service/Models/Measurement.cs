using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Models
{
    public class Measurement
    {
        public int Id { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
        
        //public int UserID { get; set; }

        public DateTime Date { get; set; }
        public int DayAttemptNumber { get; set; }
        public long Timestamp { get; set; }
        public double AccelerometerValue { get; set; }
    }
}
